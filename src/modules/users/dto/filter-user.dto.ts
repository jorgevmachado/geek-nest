import { EStatus } from '@/enums/status.enum';

import { ERole } from '@/modules/users/users.enum';

import { QueryParametersDto } from '@/dto/query-parameters.dto';

export class FilterUserDto extends QueryParametersDto {
  all?: boolean;
  cpf?: string;
  role?: ERole;
  name?: string;
  email?: string;
  status?: EStatus;
}
