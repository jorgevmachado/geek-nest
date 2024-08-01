import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
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
      return await this.repository.find();
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

    return await this.paginate(filterDto, filters);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
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
}
