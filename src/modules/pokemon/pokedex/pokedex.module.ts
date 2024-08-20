import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pokedex } from './pokedex.entity';
import { PokedexService } from './pokedex.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokedex])],
  providers: [PokedexService],
  exports: [PokedexService],
})
export class PokedexModule {}
