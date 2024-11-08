import { QueryParametersDto } from '@/dto/query-parameters.dto';

export class FilterAuthDto extends QueryParametersDto {
  cpf?: string;
  email?: string;
  whatsUp?: string;
}
