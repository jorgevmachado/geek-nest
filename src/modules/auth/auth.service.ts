import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp({
    name,
    email,
    dateOfBirth,
    password,
    passwordConfirmation,
  }: CreateUserDto) {
    const createUserDto = new CreateUserDto();
    createUserDto.name = name;
    createUserDto.email = email;
    createUserDto.password = password;
    createUserDto.dateOfBirth = dateOfBirth;
    createUserDto.passwordConfirmation = passwordConfirmation;

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
