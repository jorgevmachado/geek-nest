import { QueryParametersDto } from '../../../dto/query-parameters.dto';
import { ERole, EStatus } from '../users.interface';

export class FilterUserDto extends QueryParametersDto {
  name: string;
  email: string;
  status: EStatus;
  role: ERole;
}
