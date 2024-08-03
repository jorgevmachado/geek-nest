import {
  IsDate,
  IsEnum,
  IsOptional,
  MaxDate,
  MaxLength,
} from 'class-validator';
import { EGender } from '../users.interface';
import { Transform } from 'class-transformer';

export class UpdateUserDto {
  @IsOptional()
  @MaxLength(200)
  name: string;
  @IsOptional()
  @IsEnum(EGender)
  gender: EGender;
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @MaxDate(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), {
    message: 'You must be over 18 years old',
  })
  dateOfBirth: Date;
}
