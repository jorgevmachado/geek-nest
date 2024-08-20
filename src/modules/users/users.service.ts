import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
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

@Injectable()
export class UsersService extends Service<Users> {
  constructor(
    @InjectRepository(Users) protected repository: Repository<Users>,
  ) {
    super(repository, 'users', []);
  }

  async create({ cpf, name, email, dateOfBirth, password }: CreateUserDto) {
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
      return result;
    } catch (error) {
      if (Number(error.code) === 23505) {
        throw new ConflictException('User already exists');
      }

      throw new InternalServerErrorException('Error saving user to database');
    }
  }

  async findAll(filterDto: FilterUserDto) {
    if (!filterDto.limit || !filterDto.page) {
      const params = !filterDto.all ? {} : { withDeleted: true };
      return this.cleanUsers(await this.repository.find(params));
    }

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

    const listUsersPaginate = await this.paginate(filterDto, filters);
    return {
      ...listUsersPaginate,
      data: this.cleanUsers(listUsersPaginate.data),
    };
  }

  async checkCredentials({ email, password }: CredentialsUserDto) {
    const user = await this.repository.findOne({
      where: { email: email },
    });

    if (user.status === EStatus.INACTIVE) {
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

  async findOne(id: string, all?: boolean) {
    const user = await this.findUserBy('id', id, true, all);
    return this.cleanUser(user);
  }

  async update(
    id: string,
    { cpf, name, email, role, gender, dateOfBirth }: UpdateUserDto,
  ) {
    const user = await this.findUserBy('id', id, true);

    if (cpf) {
      const userCpf = await this.findUserBy('cpf', cpf);

      user.cpf = cpf;

      if (userCpf && userCpf.id !== user.id) {
        throw new BadRequestException('CPF already exists');
      }
    }

    if (email) {
      const userEmail = await this.findUserBy('email', email);

      user.email = email;

      if (userEmail && userEmail.id !== user.id) {
        throw new BadRequestException('Email already exists');
      }
    }

    if (role) {
      if (user.status !== EStatus.ACTIVE) {
        throw new BadRequestException(
          'the user cannot be an administrator because it is not active',
        );
      }
      user.role = role;
    }

    user.name = name ? name : user.name;
    user.gender = gender ? gender : user.gender;
    user.dateOfBirth = dateOfBirth ? dateOfBirth : user.dateOfBirth;

    try {
      user.status = this.validateStatus(user);
      const result = await this.repository.save(user);
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

    const user = await this.findUserBy('id', id, true);

    if (user.role !== ERole.USER || user.status !== EStatus.ACTIVE) {
      const message =
        user.role === ERole.ADMIN
          ? 'User is already an administrator'
          : 'User cannot be promoted';
      throw new BadRequestException(message);
    }

    return await this.promoteUser(user);
  }

  async remove(id: string) {
    const user = await this.findUserBy('id', id, true);
    user.deletedAt = new Date();
    user.status = EStatus.INACTIVE;
    await this.repository.save(user);
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

  private async findUserBy(
    by: 'id' | 'cpf' | 'email',
    value: string,
    withThrow?: boolean,
    all?: boolean,
  ) {
    const options = !all
      ? { where: { [by]: value } }
      : { withDeleted: true, where: { [by]: value } };
    const user = await this.repository.findOne(options);

    if (!user) {
      if (!withThrow) {
        return null;
      }
      throw new NotFoundException('User not found');
    }
    return user;
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
}
