import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Match } from '../../../decorators/match.decorator';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(200)
  name: string;
  @IsNotEmpty()
  @MaxLength(200)
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  @IsNotEmpty()
  @MinLength(6)
  @Match('password')
  passwordConfirmation: string;
}
