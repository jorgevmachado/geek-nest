import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PassportModule } from '@nestjs/passport';
import { TypeModule } from './type/type.module';
import { StatModule } from './stat/stat.module';
import { MoveModule } from './move/move.module';
import { AbilityModule } from './ability/ability.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import { PokemonApi } from './pokemon.api';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pokemon]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeModule,
    StatModule,
    MoveModule,
    AbilityModule,
  ],
  controllers: [PokemonController],
  providers: [PokemonService, PokemonApi],
})
export class PokemonModule {}
