import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthRoleGuards } from '../auth/auth-role.guards';
import { FilterPokemonDto } from './dto/filter-pokemon.dto';

@Controller('pokemon')
@UseGuards(AuthGuard(), AuthRoleGuards)
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll(@Query() filter: FilterPokemonDto) {
    return this.pokemonService.findAll(filter);
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.pokemonService.findOne(name);
  }
}
