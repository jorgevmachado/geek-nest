import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  MaxDate,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from '../../../decorators/match.decorator';
import { IUser } from '../users.interface';
import { Transform } from 'class-transformer';

interface ICreateUserDto
  extends Pick<IUser, 'name' | 'email' | 'password' | 'dateOfBirth'> {
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
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @MaxDate(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), {
    message: 'You must be over 18 years old',
  })
  dateOfBirth: Date;
}
