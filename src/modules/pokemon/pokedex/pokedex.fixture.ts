import { EStatus } from '@/enums/status.enum';

import {
  ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
  ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
} from '../pokemon.fixture';
import { Pokedex } from './pokedex.entity';

export const POKEDEX_FIXTURE_ACTIVE: Pokedex = {
  account: undefined,
  id: 'POKEDEX_FIXTURE_ACTIVE',
  status: EStatus.ACTIVE,
  created_at: new Date(),
  updated_at: new Date(),
  pokemons: [
    {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
      ],
    },
    {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
      ],
    },
    {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
      ],
    },
  ],
};
