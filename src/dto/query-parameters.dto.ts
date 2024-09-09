import { ERole } from '@/enums/role.enum';
import { EStatus } from '@/enums/status.enum';

export class QueryParametersDto {
  all?: boolean;
  asc?: string;
  desc?: string;
  page?: number;
  name?: string;
  role?: ERole;
  limit?: number;
  status?: EStatus;
  withDeleted?: boolean;
}
