import { EStatus } from '@/enums/status.enum';

import { QueryParametersDto } from '@/dto/query-parameters.dto';

export class FilterPokemonDto extends QueryParametersDto {
  name?: string;
  status?: EStatus;
}
