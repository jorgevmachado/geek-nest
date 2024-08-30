import { EStatus } from '@/enums/status.enum';

import { ERole } from '@/modules/users/users.enum';

import { QueryParametersDto } from '@/dto/query-parameters.dto';

export class FilterUserDto extends QueryParametersDto {
  cpf?: string;
  role?: ERole;
  email?: string;
  status?: EStatus;
}
