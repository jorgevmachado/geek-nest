import { PartialType } from '@nestjs/mapped-types';

import { QueryParametersDto } from '@/dto/query-parameters.dto';

export class FilterPokemonDto extends PartialType(QueryParametersDto) {}
