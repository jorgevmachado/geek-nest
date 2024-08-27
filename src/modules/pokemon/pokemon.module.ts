import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pokemon } from './pokemon.entity';
import { PokemonApi } from './pokemon.api';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

import { AbilityModule } from './ability/ability.module';

import { EvolutionsModule } from './evolutions/evolutions.module';
import { MoveModule } from './move/move.module';
import { PokedexModule } from './pokedex/pokedex.module';
import { StatModule } from './stat/stat.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pokemon]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeModule,
    StatModule,
    MoveModule,
    AbilityModule,
    PokedexModule,
    EvolutionsModule,
  ],
  controllers: [PokemonController],
  providers: [PokemonService, PokemonApi],
})
export class PokemonModule {}
