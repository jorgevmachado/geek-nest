import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CredentialsUserDto {
  constructor({}) {}
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
