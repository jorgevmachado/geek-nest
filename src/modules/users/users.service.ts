import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { ERole, EStatus } from './users.interface';
import { FilterUserDto } from './dto/filter-user.dto';
import { Service } from '../../services/service';
import { CredentialsUserDto } from './dto/credentials-user.dto';

@Injectable()
export class UsersService extends Service<Users> {
  constructor(
    @InjectRepository(Users) protected repository: Repository<Users>,
  ) {
    super(repository, 'users');
  }

  async create({ name, email, password }: CreateUserDto) {
    const user = new Users();
    user.name = name;
    user.email = email;
    user.password = password;
    user.confirmationToken = crypto.randomBytes(32).toString('hex');
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    user.role = ERole.USER;
    user.status = EStatus.INCOMPLETE;

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
      return this.cleanUsers(await this.repository.find());
    }

    const filters: Array<{ param: string; condition: string; value: string }> =
      [];

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

    if (filterDto.name) {
      filters.push({
        param: 'email',
        condition: 'LIKE',
        value: `%${filterDto.email}%`,
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
      where: { email: email, status: EStatus.INCOMPLETE || EStatus.ACTIVE },
    });

    if (user && (await user.validatePassword(password))) {
      return {
        id: user.id,
        salt: user.salt,
        role: user.role,
        name: user.name,
        email: user.email,
        status: user.status,
        password: user.password,
        createdAt: user.createdAt,
        deletedAt: user.deletedAt,
        updatedAt: user.updatedAt,
        recoverToken: user.recoverToken,
        confirmationToken: user.confirmationToken,
        ...(user.dateOfBirth && { dateOfBirth: user.dateOfBirth }),
        ...(user.gender && { gender: user.gender }),
      };
    }

    return null;
  }

  async findOne(id: string) {
    const user = await this.repository.findOne({ where: { id: id } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.cleanUser(user);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }

  private cleanUsers(users: Array<Users>) {
    return users.map((user) => this.cleanUser(user));
  }

  private cleanUser(user: Users) {
    return {
      id: user.id,
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
}
