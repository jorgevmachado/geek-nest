import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Match } from '../../../decorators/match.decorator';
import { IUser } from '../users.interface';

interface ICreateUserDto extends Pick<IUser, 'name' | 'email' | 'password'> {
  passwordConfirmation: string;
}

export class CreateUserDto implements ICreateUserDto {
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
