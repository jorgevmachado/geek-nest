import {
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  MaxDate,
  MaxLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { CPF } from '@/decorators/cpf.decorator';
import { EGender, ERole } from '@/modules/users/users.enum';

export class UpdateUserDto {
  @IsOptional()
  @CPF()
  cpf?: string;

  @IsOptional()
  @IsEnum(ERole)
  role?: ERole;

  @IsOptional()
  @MaxLength(200)
  name?: string;

  @IsOptional()
  @MaxLength(200)
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsEnum(EGender)
  gender?: EGender;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @MaxDate(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), {
    message: 'You must be over 18 years old',
  })
  dateOfBirth?: Date;
}
