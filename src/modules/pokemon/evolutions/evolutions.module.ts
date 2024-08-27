import { Module } from '@nestjs/common';

import { EvolutionsService } from './evolutions.service';
import { PokemonApi } from '@/modules/pokemon/pokemon.api';

@Module({
  controllers: [],
  providers: [EvolutionsService, PokemonApi],
  exports: [EvolutionsService],
})
export class EvolutionsModule {}
