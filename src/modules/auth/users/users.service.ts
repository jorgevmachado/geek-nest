import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { isArray } from 'class-validator';

import { Service } from '@/services';

import { ERole } from '@/enums/role.enum';
import { EStatus } from '@/enums/status.enum';

import type { IFilterParams } from '@/interfaces/filter.interface';

import { CreateAuthDto } from '@/modules/auth/dto/create-auth.dto';
import { CredentialsAuthDto } from '@/modules/auth/dto/credentials-auth.dto';
import { FilterAuthDto } from '@/modules/auth/dto/filter-auth.dto';
import { UpdateAuthDto } from '@/modules/auth/dto/update-auth.dto';
import { Users } from '@/modules/auth/users/users.entity';

@Injectable()
export class UsersService extends Service<Users> {
  constructor(
    @InjectRepository(Users) protected repository: Repository<Users>,
  ) {
    super(repository, 'users', []);
  }

  async create(createAuthDto: CreateAuthDto) {
    const userCpf = await this.findBy({
      by: 'cpf',
      value: createAuthDto.cpf,
      withDeleted: true,
    });

    const userEmail = await this.findBy({
      by: 'email',
      value: createAuthDto.email,
      withDeleted: true,
    });

    const userWhatsUp = await this.findBy({
      by: 'whatsUp',
      value: createAuthDto.whatsUp,
      withDeleted: true,
    });

    if (
      (userCpf && userCpf.deletedAt !== null) ||
      (userEmail && userEmail.deletedAt !== null) ||
      (userWhatsUp && userWhatsUp.deletedAt !== null)
    ) {
      throw new InternalServerErrorException(
        'Inactive user, please contact administrator.',
      );
    }

    const user = new Users();
    user.cpf = createAuthDto.cpf;
    user.salt = await bcrypt.genSalt();
    user.role = ERole.USER;
    user.name = createAuthDto.name;
    user.email = createAuthDto.email;
    user.gender = createAuthDto.gender;
    user.status = EStatus.ACTIVE;
    user.whatsUp = createAuthDto.whatsUp;
    user.password = await bcrypt.hash(createAuthDto.password, user.salt);
    user.dateOfBirth = createAuthDto.dateOfBirth;
    user.confirmationToken = crypto.randomBytes(32).toString('hex');

    try {
      const result = await this.repository.save(user);
      return this.cleanUser(result);
    } catch (error) {
      if (Number(error.code) === 23505) {
        throw new ConflictException('User already exists');
      }

      throw new InternalServerErrorException('Error saving user to database');
    }
  }

  async update(id: string, updateAuthDto: UpdateAuthDto) {
    const { cpf, role, name, email, gender, whatsUp, dateOfBirth } =
      updateAuthDto;

    const currentUser = await this.findBy({
      by: 'id',
      value: id,
      withThrow: true,
    });

    currentUser.cpf = await this.validateCpf(
      currentUser.id,
      currentUser.cpf,
      cpf,
    );

    currentUser.role = this.validateRole(
      currentUser.status,
      currentUser.role,
      role,
    );

    currentUser.email = await this.validateEmail(
      currentUser.id,
      currentUser.email,
      email,
    );

    currentUser.whatsUp = await this.validateWhatsUp(
      currentUser.id,
      currentUser.whatsUp,
      whatsUp,
    );

    currentUser.name = !name ? currentUser.name : name;
    currentUser.gender = !gender ? currentUser.gender : gender;
    currentUser.dateOfBirth = !dateOfBirth
      ? currentUser.dateOfBirth
      : dateOfBirth;
    currentUser.status = this.validateStatus(
      currentUser.status,
      currentUser.gender,
    );
    try {
      const result = await this.repository.save(currentUser);
      return this.cleanUser(result);
    } catch (_) {
      throw new InternalServerErrorException(
        `Error updating user with ${id} in database`,
      );
    }
  }

  async findAll(filterAuthDto?: FilterAuthDto) {
    const results = await this.index({
      filters: this.generateFilters(filterAuthDto),
      parameters: filterAuthDto,
      withDeleted: filterAuthDto?.withDeleted,
    });

    if (isArray(results)) {
      return results.map((user) => this.cleanUser(user));
    }

    return {
      ...results,
      data: results.data.map((user) => this.cleanUser(user)),
    };
  }

  async findOne(
    id: string,
    withDeleted?: boolean,
    mustCleanUser: boolean = true,
  ) {
    const currentUser = await this.findBy({
      by: 'id',
      value: id,
      withThrow: true,
      withDeleted,
    });
    if (mustCleanUser) {
      return this.cleanUser(currentUser);
    }

    return currentUser;
  }

  async remove(id: string) {
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

  async checkCredentials({ email, password }: CredentialsAuthDto) {
    const user = await this.findBy({
      by: 'email',
      value: email,
    });

    if (!user || user?.status === EStatus.INACTIVE) {
      return null;
    }

    if (await this.validatePassword(user.salt, password, user.password)) {
      return user;
    }

    return null;
  }

  async promote(userId: Users['id']) {
    try {
      await this.update(userId, { role: ERole.ADMIN });
      return { message: 'User promoted to administrator successfully' };
    } catch (_) {
      throw new InternalServerErrorException('Error promoting user');
    }
  }

  cleanUser(user: Users) {
    return {
      id: user.id,
      cpf: user.cpf,
      role: user.role,
      name: user.name,
      email: user.email,
      status: user.status,
      gender: user.gender,
      whatsUp: user.whatsUp,
      dateOfBirth: user.dateOfBirth,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      ...(user.deletedAt && { deletedAt: user.deletedAt }),
    };
  }

  private async validateCpf(
    id: Users['id'],
    userCpf: Users['cpf'],
    cpf?: string,
  ) {
    if (!cpf) {
      return userCpf;
    }
    const entityCpf = await this.findBy({
      by: 'cpf',
      value: cpf,
    });

    if (Boolean(entityCpf) && entityCpf.id !== id) {
      throw new BadRequestException('CPF already exists');
    }

    return cpf;
  }

  private async validateEmail(
    id: Users['id'],
    userEmail: Users['email'],
    email?: string,
  ) {
    if (!email) {
      return userEmail;
    }
    const entityEmail = await this.findBy({
      by: 'email',
      value: email,
    });

    if (Boolean(entityEmail) && entityEmail.id !== id) {
      throw new BadRequestException('Email already exists');
    }

    return email;
  }

  private async validateWhatsUp(
    id: Users['id'],
    userWhatsUp: Users['whatsUp'],
    whatsUp?: string,
  ) {
    if (!whatsUp) {
      return userWhatsUp;
    }
    const entityWhatsUp = await this.findBy({
      by: 'whatsUp',
      value: whatsUp,
    });

    if (Boolean(entityWhatsUp) && entityWhatsUp.id !== id) {
      throw new BadRequestException('WhatsUp already exists');
    }

    return whatsUp;
  }

  private validateRole(
    userStatus: Users['status'],
    userRole: Users['role'],
    role?: ERole,
  ) {
    if (!role) {
      return userRole;
    }
    if (userStatus !== EStatus.ACTIVE && role !== ERole.USER) {
      throw new BadRequestException(
        'the user cannot be an administrator because it is not active',
      );
    }

    return role;
  }

  private validateStatus(
    userStatus: Users['status'],
    userGender?: Users['gender'],
  ) {
    return userStatus === EStatus.INCOMPLETE && Boolean(userGender)
      ? EStatus.ACTIVE
      : EStatus.INCOMPLETE;
  }

  private generateFilters(filterDto: FilterAuthDto): Array<IFilterParams> {
    const filters: Array<IFilterParams> = [];
    if (!filterDto) {
      return filters;
    }
    if (filterDto?.role) {
      filters.push({
        param: 'role',
        condition: '=',
        value: filterDto.role.toUpperCase(),
      });
    }

    if (filterDto?.status) {
      filters.push({
        param: 'status',
        condition: '=',
        value: filterDto.status.toUpperCase(),
      });
    }

    if (filterDto?.name) {
      filters.push({
        param: 'name',
        condition: 'LIKE',
        value: `%${filterDto.name}%`,
      });
    }

    if (filterDto?.email) {
      filters.push({
        param: 'email',
        condition: 'LIKE',
        value: `%${filterDto.email}%`,
      });
    }

    if (filterDto?.cpf) {
      filters.push({
        param: 'cpf',
        condition: 'LIKE',
        value: `%${filterDto.cpf}%`,
      });
    }

    return filters;
  }

  private async validatePassword(
    salt: string,
    password: string,
    userPassword: string,
  ) {
    const hash = await bcrypt.hash(password, salt);
    return hash === userPassword;
  }
}
