import { QueryParametersDto } from '../../../dto/query-parameters.dto';
import { ERole } from '../users.interface';
import { EStatus } from '../../../enums/status.enum';

export class FilterUserDto extends QueryParametersDto {
  all?: boolean;
  cpf?: string;
  role?: ERole;
  name?: string;
  email?: string;
  status?: EStatus;
}
