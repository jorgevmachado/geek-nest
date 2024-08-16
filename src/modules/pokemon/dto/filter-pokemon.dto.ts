import { QueryParametersDto } from '../../../dto/query-parameters.dto';
import { EStatus } from '../../../enums/status.enum';

export class FilterPokemonDto extends QueryParametersDto {
  name?: string;
  status?: EStatus;
}
