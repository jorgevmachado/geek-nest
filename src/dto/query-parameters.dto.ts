import { EStatus } from '@/enums/status.enum';

export class QueryParametersDto {
  all?: boolean;
  asc?: string;
  desc?: string;
  page?: number;
  name?: string;
  limit?: number;
  status?: EStatus;
}
