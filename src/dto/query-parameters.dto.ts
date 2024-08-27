import { EStatus } from '@/enums/status.enum';

export class QueryParametersDto {
  asc?: string;
  desc?: string;
  page?: number;
  name?: string;
  limit?: number;
  status?: EStatus;
}
