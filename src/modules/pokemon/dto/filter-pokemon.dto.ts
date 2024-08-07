import { QueryParametersDto } from '../../../dto/query-parameters.dto';
import { EStatus } from '../pokemon.interface';

export class FilterPokemonDto extends QueryParametersDto {
  name?: string;
  status?: EStatus;
}
