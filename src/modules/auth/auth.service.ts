import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ERole } from '@/enums/role.enum';
import { EStatus } from '@/enums/status.enum';

import { Users } from '@/modules/auth/users/users.entity';
import { UsersService } from '@/modules/auth/users/users.service';

import { CreateAuthDto } from './dto/create-auth.dto';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { FilterAuthDto } from './dto/filter-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(createAuthDto: CreateAuthDto) {
    await this.userService.create(createAuthDto);
    return { message: 'Registration Completed Successfully!' };
  }

  async signIn({ email, password }: CredentialsAuthDto) {
    const credential = await this.userService.checkCredentials({
      email,
      password,
    });
    if (!credential) {
      throw new UnprocessableEntityException('Invalid credentials');
    }

    const jwtPayload = { id: credential.id };

    const token = this.jwtService.sign(jwtPayload);

    return { token };
  }

  async updateUser(id: string, updateAuthDto: UpdateAuthDto, authUser?: Users) {
    if (Boolean(authUser)) {
      this.validateCurrentUser(id, authUser);
    }

    if (
      Boolean(authUser) &&
      authUser.role !== ERole.ADMIN &&
      Boolean(updateAuthDto.role) &&
      updateAuthDto.role !== ERole.USER
    ) {
      throw new ForbiddenException(
        'You are not authorized to change the user role',
      );
    }

    return await this.userService.update(id, updateAuthDto);
  }

  async findAllUsers(filterDto?: FilterAuthDto) {
    return await this.userService.findAll(filterDto);
  }

  async findOneUser(id: string, user: Users) {
    this.validateCurrentUser(id, user);
    const withDeleted = user.role === ERole.ADMIN;
    return this.userService.findOne(id, withDeleted);
  }

  async removeUser(id: string, authUser: Users) {
    if (authUser.id === id) {
      throw new BadRequestException('You cannot delete yourself');
    }
    return await this.userService.remove(id);
  }

  async promoteUser(id: string, authUser: Users) {
    const users = (await this.userService.findAll()) as Array<Users>;
    const onlyUser = users[0];
    if (
      users.length === 1 &&
      onlyUser.id === id &&
      onlyUser.role === ERole.USER &&
      onlyUser.status === EStatus.ACTIVE
    ) {
      return await this.userService.promote(onlyUser.id);
    }

    if (authUser.role !== ERole.ADMIN) {
      throw new ForbiddenException(
        'You are not authorized to access this feature',
      );
    }

    const user = (await this.userService.findOne(id, false, true)) as Users;

    if (user.role !== ERole.USER || user.status !== EStatus.ACTIVE) {
      const message =
        user.role === ERole.ADMIN
          ? 'User is already an administrator'
          : 'User cannot be promoted';
      throw new BadRequestException(message);
    }
    return await this.userService.promote(user.id);
  }

  cleanUser(user: Users) {
    return this.userService.cleanUser(user);
  }

  private validateCurrentUser(id: string, user: Users) {
    if (id !== user.id && user.role !== 'ADMIN') {
      throw new UnprocessableEntityException(
        'You are not authorized to access this feature',
      );
    }
  }
}
