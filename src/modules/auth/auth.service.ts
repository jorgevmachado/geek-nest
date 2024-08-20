import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDto } from '../users/dto/create-user.dto';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
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
}
