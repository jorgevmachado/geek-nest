import { IsArray, IsOptional } from 'class-validator';

export class PokemonPokedexDto {
  @IsOptional()
  @IsArray()
  ids?: Array<string>;
  @IsOptional()
  @IsArray()
  names?: Array<string>;
}
