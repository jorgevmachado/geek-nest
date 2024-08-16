import {
  Body,
  Controller,
  ForbiddenException,
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
import { EStatus } from '../../enums/status.enum';

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

  @Post('pokedex')
  addPokemon(@GetUserAuth() user: Users, @Body() pokemons: PokemonPokedexDto) {
    if (user.status !== EStatus.ACTIVE) {
      throw new ForbiddenException(
        'You are not authorized to access this feature',
      );
    }
    return this.pokemonService.addPokemon(user, pokemons);
  }
}
