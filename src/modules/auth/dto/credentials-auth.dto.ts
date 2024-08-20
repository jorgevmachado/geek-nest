import { PartialType } from '@nestjs/mapped-types';

import { CredentialsUserDto } from '../../users/dto/credentials-user.dto';

export class CredentialsAuthDto extends PartialType(CredentialsUserDto) {}
