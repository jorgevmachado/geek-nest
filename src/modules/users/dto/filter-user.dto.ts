import { QueryParametersDto } from '@/dto/query-parameters.dto';
import { EStatus } from '@/enums/status.enum';
import { ERole } from '@/modules/users/users.enum';

export class FilterUserDto extends QueryParametersDto {
  all?: boolean;
  cpf?: string;
  role?: ERole;
  name?: string;
  email?: string;
  status?: EStatus;
}
