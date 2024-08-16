import { Module } from '@nestjs/common';
import { PokedexService } from './pokedex.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokedex } from './pokedex.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokedex])],
  providers: [PokedexService],
  exports: [PokedexService],
})
export class PokedexModule {}
