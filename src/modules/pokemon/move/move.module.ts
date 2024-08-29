import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Move } from './move.entity';
import { MoveService } from './move.service';
import { PokemonApi } from '@/modules/pokemon/pokemon.api';

@Module({
  imports: [TypeOrmModule.forFeature([Move])],
  providers: [MoveService, PokemonApi],
  exports: [MoveService],
})
export class MoveModule {}
