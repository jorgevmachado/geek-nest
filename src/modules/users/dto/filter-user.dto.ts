import { QueryParametersDto } from '../../../dto/query-parameters.dto';
import { ERole, EStatus } from '../users.interface';

export class FilterUserDto extends QueryParametersDto {
  all?: boolean;
  cpf?: string;
  role?: ERole;
  name?: string;
  email?: string;
  status?: EStatus;
}
