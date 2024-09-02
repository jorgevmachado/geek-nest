import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';

import { Repository } from 'typeorm';

import { FilterUserDto } from './dto/filter-user.dto';
import { Service } from '@/services';

import { CredentialsUserDto } from './dto/credentials-user.dto';

import type { IFilterParams } from '@/interfaces/filter.interface';

import { EStatus } from '@/enums/status.enum';

import { ERole } from '@/modules/users/users.enum';
import { isArray } from 'class-validator';

@Injectable()
export class UsersService extends Service<Users> {
  constructor(
    @InjectRepository(Users) protected repository: Repository<Users>,
  ) {
    super(repository, 'users', []);
  }

  async create({ cpf, name, email, dateOfBirth, password }: CreateUserDto) {
    const userCpf = await this.findBy({
      by: 'cpf',
      all: true,
      value: cpf,
    });

    const userEmail = await this.findBy({
      by: 'email',
      all: true,
      value: email,
    });

    if (
      (userCpf && userCpf.deletedAt !== null) ||
      (userEmail && userEmail.deletedAt !== null)
    ) {
      throw new InternalServerErrorException(
        'Inactive user, please contact administrator.',
      );
    }

    const user = new Users();
    user.cpf = cpf;
    user.salt = await bcrypt.genSalt();
    user.role = ERole.USER;
    user.name = name;
    user.email = email;
    user.status = EStatus.INCOMPLETE;
    user.dateOfBirth = dateOfBirth;
    user.password = await this.hashPassword(password, user.salt);
    user.confirmationToken = crypto.randomBytes(32).toString('hex');

    try {
      const result = await this.repository.save(user);
      delete result.password;
      delete result.salt;
      delete result.recoverToken;
      delete result.dateOfBirth;
      delete result.gender;
      delete result.updatedAt;
      delete result.deletedAt;
      delete result.confirmationToken;
      return result;
    } catch (error) {
      if (Number(error.code) === 23505) {
        throw new ConflictException('User already exists');
      }

      throw new InternalServerErrorException('Error saving user to database');
    }
  }

  async findAll(filterDto: FilterUserDto) {
    const filters = this.generateFilters(filterDto);
    const result = await this.index({
      filters,
      parameters: filterDto,
      withDeleted: filterDto.all,
    });
    if (isArray(result)) {
      return this.cleanUsers(result);
    }

    return {
      ...result,
      data: this.cleanUsers(result.data),
    };
  }

  async checkCredentials({ email, password }: CredentialsUserDto) {
    const user = await this.findBy({
      by: 'email',
      value: email,
    });

    if (user?.status === EStatus.INACTIVE) {
      return null;
    }

    if (user && (await user.validatePassword(password))) {
      return {
        id: user.id,
        cpf: user.cpf,
        role: user.role,
        salt: user.salt,
        name: user.name,
        email: user.email,
        gender: user.gender,
        status: user.status,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
        dateOfBirth: user.dateOfBirth,
        recoverToken: user.recoverToken,
        confirmationToken: user.confirmationToken,
      };
    }

    return null;
  }

  async findOne(id: string, user: Users, all?: boolean) {
    this.validateCurrentUser(user, id);
    const currentUser = await this.findBy({
      by: 'id',
      value: id,
      withThrow: true,
      all,
    });
    return this.cleanUser(currentUser);
  }

  async update(
    id: string,
    { cpf, name, email, role, gender, dateOfBirth }: UpdateUserDto,
    authUser?: Users,
  ) {
    if (Boolean(authUser)) {
      this.validateCurrentUser(authUser, id);
    }

    if (Boolean(authUser) && authUser.role !== ERole.ADMIN && Boolean(role)) {
      throw new ForbiddenException(
        'You are not authorized to change the user role',
      );
    }

    const currentUser = await this.findBy({
      by: 'id',
      value: id,
      withThrow: true,
    });

    if (cpf) {
      const userCpf = await this.findBy({
        by: 'cpf',
        value: cpf,
      });

      currentUser.cpf = cpf;

      if (Boolean(userCpf) && userCpf.id !== currentUser.id) {
        throw new BadRequestException('CPF already exists');
      }
    }

    if (email) {
      const userEmail = await this.findBy({
        by: 'email',
        value: email,
      });

      currentUser.email = email;

      if (userEmail && userEmail.id !== currentUser.id) {
        throw new BadRequestException('Email already exists');
      }
    }

    if (role) {
      if (currentUser.status !== EStatus.ACTIVE) {
        throw new BadRequestException(
          'the user cannot be an administrator because it is not active',
        );
      }
      currentUser.role = role;
    }

    currentUser.name = name ? name : currentUser.name;
    currentUser.gender = gender ? gender : currentUser.gender;
    currentUser.dateOfBirth = dateOfBirth
      ? dateOfBirth
      : currentUser.dateOfBirth;

    try {
      currentUser.status = this.validateStatus(currentUser);
      const result = await this.repository.save(currentUser);
      return this.cleanUser(result);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error updating user with ${id} in database`,
      );
    }
  }

  async promote(id: string, authUser: Users) {
    const [users, total] = await this.repository.findAndCount();
    const onlyUser = users[0];

    if (
      total === 1 &&
      onlyUser.id === id &&
      onlyUser.role === ERole.USER &&
      onlyUser.status === EStatus.ACTIVE
    ) {
      return await this.promoteUser(onlyUser);
    }

    if (authUser.role !== ERole.ADMIN) {
      throw new ForbiddenException(
        'You are not authorized to access this feature',
      );
    }

    const user = await this.findBy({
      by: 'id',
      value: id,
      withThrow: true,
    });

    if (user.role !== ERole.USER || user.status !== EStatus.ACTIVE) {
      const message =
        user.role === ERole.ADMIN
          ? 'User is already an administrator'
          : 'User cannot be promoted';
      throw new BadRequestException(message);
    }

    return await this.promoteUser(user);
  }

  async remove(id: string, user: Users) {
    if (user.id === id) {
      throw new BadRequestException('You cannot delete yourself');
    }
    const currentUser = await this.findBy({
      by: 'id',
      value: id,
      withThrow: true,
    });
    currentUser.deletedAt = new Date();
    currentUser.status = EStatus.INACTIVE;
    await this.repository.save(currentUser);
    return {
      message: `User with id ${id} successfully removed`,
    };
  }

  private validateStatus(user: Users) {
    if (user.status === EStatus.INCOMPLETE && !user.gender) {
      return EStatus.INCOMPLETE;
    }
    return EStatus.ACTIVE;
  }

  private hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }

  private cleanUsers(users: Array<Users>) {
    return users.map((user) => this.cleanUser(user));
  }

  private cleanUser(user?: Users) {
    if (!user) {
      return user;
    }
    return {
      id: user.id,
      cpf: user.cpf,
      role: user.role,
      name: user.name,
      email: user.email,
      status: user.status,
      ...(user.status !== EStatus.INCOMPLETE && {
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
      }),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      ...(user.deletedAt && { deletedAt: user.deletedAt }),
    };
  }

  private async promoteUser(user: Users) {
    try {
      await this.update(user.id, {
        role: ERole.ADMIN,
      });
      return { message: 'User promoted to administrator successfully' };
    } catch (error) {
      throw new InternalServerErrorException('Error promoting user');
    }
  }

  private validateCurrentUser(user: Users, id: string) {
    if (user.role !== ERole.ADMIN && user.id !== id) {
      throw new ForbiddenException(
        'You are not authorized to access this feature',
      );
    }
  }

  private generateFilters(filterDto: FilterUserDto): Array<IFilterParams> {
    const filters: Array<IFilterParams> = [];

    if (filterDto.role) {
      filters.push({
        param: 'role',
        condition: '=',
        value: filterDto.role.toUpperCase(),
      });
    }

    if (filterDto.status) {
      filters.push({
        param: 'status',
        condition: '=',
        value: filterDto.status.toUpperCase(),
      });
    }

    if (filterDto.name) {
      filters.push({
        param: 'name',
        condition: 'LIKE',
        value: `%${filterDto.name}%`,
      });
    }

    if (filterDto.email) {
      filters.push({
        param: 'email',
        condition: 'LIKE',
        value: `%${filterDto.email}%`,
      });
    }

    if (filterDto.cpf) {
      filters.push({
        param: 'cpf',
        condition: 'LIKE',
        value: `%${filterDto.cpf}%`,
      });
    }

    return filters;
  }
}
