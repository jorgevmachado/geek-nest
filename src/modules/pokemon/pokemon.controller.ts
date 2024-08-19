import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthRoleGuards } from '../auth/auth-role.guards';
import { FilterPokemonDto } from './dto/filter-pokemon.dto';
import { GetUserAuth } from '../auth/auth-user.decorator';
import { Users } from '../users/users.entity';
import { PokemonPokedexDto } from './dto/pokemon-pokedex.dto';

@Controller('pokemon')
@UseGuards(AuthGuard(), AuthRoleGuards)
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll(@Query() filter: FilterPokemonDto) {
    return this.pokemonService.findAll(filter);
  }

  @Get('pokedex')
  findPokedex(@GetUserAuth() user: Users) {
    return this.pokemonService.findPokedex(user);
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.pokemonService.findOne(name);
  }

  @Post('pokedex')
  addPokemon(@GetUserAuth() user: Users, @Body() pokemons: PokemonPokedexDto) {
    return this.pokemonService.addPokemon(user, pokemons);
  }
}
