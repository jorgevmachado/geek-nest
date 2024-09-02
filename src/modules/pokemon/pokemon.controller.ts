import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { PokemonService } from './pokemon.service';

import { Users } from '../users/users.entity';

import { AuthRoleGuards } from '../auth/auth-role.guards';
import { FilterPokemonDto } from './dto/filter-pokemon.dto';
import { GetUserAuth } from '../auth/auth-user.decorator';
import { PokemonPokedexDto } from './dto/pokemon-pokedex.dto';
import { AuthStatusGuards } from '@/modules/auth/auth-status.guards';
import { Status } from '@/modules/auth/auth-status.decorator';
import { EStatus } from '@/enums/status.enum';

@ApiTags('pokemon')
@Controller('pokemon')
@UseGuards(AuthGuard(), AuthRoleGuards, AuthStatusGuards)
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll(@Query() filter: FilterPokemonDto) {
    return this.pokemonService.findAll(filter);
  }

  @Get('pokedex')
  @Status(EStatus.ACTIVE, EStatus.COMPLETE)
  findPokedex(@GetUserAuth() user: Users) {
    return this.pokemonService.findPokedex(user);
  }

  @Get(':param')
  findOne(@Param('param') param: string) {
    return this.pokemonService.findOne(param);
  }

  @Post('pokedex')
  @Status(EStatus.ACTIVE, EStatus.COMPLETE)
  addPokemonToPokedex(
    @GetUserAuth() user: Users,
    @Body() pokemons: PokemonPokedexDto,
  ) {
    return this.pokemonService.addPokemonToPokedex(user, pokemons);
  }
}
