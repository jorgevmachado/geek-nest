import type {
  IResponseEvolution,
  IResponsePaginate,
  IResponsePokemon,
  IResponsePokemonByName,
  IResponsePokemonSpecie,
} from '@/modules/pokemon/pokemon.interface';
import {
  RESPONSE_EVOLUTION_FIXTURE,
  RESPONSE_POKEMON_BASE_FIXTURE_PAGINATE,
  RESPONSE_POKEMON_BY_NAME_FIXTURE_LIST,
  RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_LIST,
} from '@/modules/pokemon/fixtures/response';

import { Ability } from '@/modules/pokemon/ability/ability.entity';
import { Move } from '@/modules/pokemon/move/move.entity';
import { Pokemon } from '@/modules/pokemon/pokemon.entity';
import { Stat } from '@/modules/pokemon/stat/stat.entity';
import { Type } from '@/modules/pokemon/type/type.entity';

import {
  ENTITIES_MOVES_FIXTURE_BULBASAUR,
  ENTITIES_MOVES_FIXTURE_IVYSAUR,
  ENTITIES_MOVES_FIXTURE_VENUSAUR,
} from '@/modules/pokemon/move/move.fixture';
import {
  ENTITY_POKEMON_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_FIXTURE_IVYSAUR,
  ENTITY_POKEMON_FIXTURE_VENUSAUR,
} from '@/modules/pokemon/pokemon.fixture';
import { ENTITIES_ABILITIES_FIXTURE } from '@/modules/pokemon/ability/ability.fixture';
import { ENTITIES_STATS_FIXTURE } from '@/modules/pokemon/stat/stat.fixture';
import { ENTITIES_TYPES_FIXTURE } from '@/modules/pokemon/type/type.fixture';

export type TResponse =
  | 'getAll'
  | 'getByName'
  | 'getSpecieByName'
  | 'getEvolutions';

export type TResponseResolve =
  | IResponsePaginate<IResponsePokemon>
  | IResponsePokemonByName
  | IResponsePokemonSpecie
  | IResponseEvolution;

export type TService =
  | 'typeService'
  | 'statService'
  | 'moveService'
  | 'abilityService'
  | 'evolutionService';

export type TServiceResolve =
  | Array<Pokemon>
  | Array<Type>
  | Array<Stat>
  | Array<Move>
  | Array<Ability>;

export function generateResponse(
  order: number,
  response: TResponse,
  resolve?: TResponseResolve,
): TResponseResolve | null {
  switch (response) {
    case 'getByName':
      return !resolve
        ? RESPONSE_POKEMON_BY_NAME_FIXTURE_LIST.find(
            (item) => item.order === order,
          )
        : resolve;
    case 'getSpecieByName':
      return !resolve
        ? RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_LIST.find(
            (item) => item.order === order,
          )
        : resolve;
    case 'getEvolutions':
      return !resolve ? RESPONSE_EVOLUTION_FIXTURE : resolve;
    case 'getAll':
      return !resolve ? RESPONSE_POKEMON_BASE_FIXTURE_PAGINATE : resolve;
    default:
      return null;
  }
}

export function generateEntities(
  service: TService,
  order?: number,
  resolve?: TServiceResolve,
): TServiceResolve | null {
  switch (service) {
    case 'typeService':
      return !resolve ? ENTITIES_TYPES_FIXTURE : resolve;
    case 'statService':
      return !resolve ? ENTITIES_STATS_FIXTURE : resolve;
    case 'moveService':
      if (resolve) {
        return resolve;
      }
      switch (order) {
        case 1:
          return ENTITIES_MOVES_FIXTURE_BULBASAUR;
        case 2:
          return ENTITIES_MOVES_FIXTURE_IVYSAUR;
        case 3:
          return ENTITIES_MOVES_FIXTURE_VENUSAUR;
        default:
          return [];
      }
    case 'abilityService':
      return !resolve ? ENTITIES_ABILITIES_FIXTURE : resolve;
    case 'evolutionService':
      return !resolve
        ? [
            ENTITY_POKEMON_FIXTURE_BULBASAUR,
            ENTITY_POKEMON_FIXTURE_IVYSAUR,
            ENTITY_POKEMON_FIXTURE_VENUSAUR,
          ]
        : resolve;
    default:
      return null;
  }
}

export function match(expected: Pokemon, received: Pokemon) {
  let matchFail = false;
  if (expected?.id !== received?.id) {
    matchFail = true;
    console.log('expected.id => ', expected?.id);
    console.log('received.id => ', received?.id);
  }

  if (expected?.url !== received?.url) {
    matchFail = true;
    console.log('expected?.url => ', expected?.url);
    console.log('received?.url => ', received?.url);
  }

  if (expected?.name !== received?.name) {
    matchFail = true;
    console.log('expected?.name => ', expected?.name);
    console.log('received?.name => ', received?.name);
  }

  if (expected?.image !== received?.image) {
    matchFail = true;
    console.log('expected?.image => ', expected?.image);
    console.log('received?.image => ', received?.image);
  }

  if (expected?.order !== received?.order) {
    matchFail = true;
    console.log('expected?.order => ', expected?.order);
    console.log('received?.order => ', received?.order);
  }

  if (expected?.status !== received?.status) {
    matchFail = true;
    console.log('expected?.status => ', expected?.status);
    console.log('received?.status => ', received?.status);
  }

  if (expected?.habitat !== received?.habitat) {
    matchFail = true;
    console.log('expected?.habitat => ', expected?.habitat);
    console.log('received?.habitat => ', received?.habitat);
  }

  if (expected?.is_baby !== received?.is_baby) {
    matchFail = true;
    console.log('expected?.is_baby => ', expected?.is_baby);
    console.log('received?.is_baby => ', received?.is_baby);
  }

  if (expected?.shape_url !== received?.shape_url) {
    matchFail = true;
    console.log('expected?.shape_url => ', expected?.shape_url);
    console.log('received?.shape_url => ', received?.shape_url);
  }

  if (expected?.shape_name !== received?.shape_name) {
    matchFail = true;
    console.log('expected?.shape_name => ', expected?.shape_name);
    console.log('received?.shape_name => ', received?.shape_name);
  }

  if (expected?.is_mythical !== received?.is_mythical) {
    matchFail = true;
    console.log('expected?.is_mythical => ', expected?.is_mythical);
    console.log('received?.is_mythical => ', received?.is_mythical);
  }

  if (expected?.gender_rate !== received?.gender_rate) {
    matchFail = true;
    console.log('expected?.gender_rate => ', expected?.gender_rate);
    console.log('received?.gender_rate => ', received?.gender_rate);
  }

  if (expected?.is_legendary !== received?.is_legendary) {
    matchFail = true;
    console.log('expected?.is_legendary => ', expected?.is_legendary);
    console.log('received?.is_legendary => ', received?.is_legendary);
  }

  if (expected?.capture_rate !== received?.capture_rate) {
    matchFail = true;
    console.log('expected?.capture_rate => ', expected?.capture_rate);
    console.log('received?.capture_rate => ', received?.capture_rate);
  }

  if (expected?.hatch_counter !== received?.hatch_counter) {
    matchFail = true;
    console.log('expected?.hatch_counter => ', expected?.hatch_counter);
    console.log('received?.hatch_counter => ', received?.hatch_counter);
  }

  if (expected?.base_happiness !== received?.base_happiness) {
    matchFail = true;
    console.log('expected?.base_happiness => ', expected?.base_happiness);
    console.log('received?.base_happiness => ', received?.base_happiness);
  }

  if (expected?.evolution_chain_url !== received?.evolution_chain_url) {
    matchFail = true;
    console.log(
      'expected.evolution_chain_url => ',
      expected?.evolution_chain_url,
    );
    console.log(
      'received?.evolution_chain_url => ',
      received?.evolution_chain_url,
    );
  }

  if (expected?.evolves_from_species !== received?.evolves_from_species) {
    matchFail = true;
    console.log(
      'expected?.evolves_from_species => ',
      expected?.evolves_from_species,
    );
    console.log(
      'received?.evolves_from_species => ',
      received?.evolves_from_species,
    );
  }

  if (expected?.has_gender_differences !== received?.has_gender_differences) {
    matchFail = true;
    console.log(
      'expected?.has_gender_differences => ',
      expected?.has_gender_differences,
    );
    console.log(
      'received?.has_gender_differences => ',
      received?.has_gender_differences,
    );
  }

  if (expected?.createdAt !== received?.createdAt) {
    matchFail = true;
    console.log('expected?.createdAt => ', expected?.createdAt);
    console.log('received?.createdAt => ', received?.createdAt);
  }

  if (expected?.updatedAt !== received?.updatedAt) {
    matchFail = true;
    console.log('expected?.updatedAt => ', expected?.updatedAt);
    console.log('received?.updatedAt => ', received?.updatedAt);
  }

  if (expected?.deletedAt !== received?.deletedAt) {
    matchFail = true;
    console.log('expected?.deletedAt => ', expected?.deletedAt);
    console.log('received?.deletedAt => ', received?.deletedAt);
  }

  if (expected?.deletedAt !== received?.deletedAt) {
    matchFail = true;
    console.log('expected?.deletedAt => ', expected?.deletedAt);
    console.log('received?.deletedAt => ', received?.deletedAt);
  }

  if (expected?.evolutions && received?.evolutions) {
    if (expected?.evolutions?.length !== received?.evolutions?.length) {
      matchFail = true;
      console.log('expected?.evolutions => ', expected?.evolutions);
      console.log('received?.evolutions => ', received?.evolutions);
    }
  }

  if (expected?.moves && received?.moves) {
    if (expected?.moves?.length !== received.moves?.length) {
      matchFail = true;
      console.log('expected?.moves => ', expected?.moves);
      console.log('received?.moves => ', received?.moves);
    }
  }

  if (expected?.stats && received?.stats) {
    if (expected?.stats?.length !== received?.stats?.length) {
      matchFail = true;
      console.log('expected?.stats => ', expected?.stats);
      console.log('received?.stats => ', received?.stats);
    }
  }

  if (expected?.types && received?.types) {
    if (expected?.types?.length !== received?.types?.length) {
      matchFail = true;
      console.log('expected?.types => ', expected?.types);
      console.log('received?.types => ', received?.types);
    }
  }

  if (expected?.abilities && received?.abilities) {
    if (expected?.abilities?.length !== received?.abilities?.length) {
      matchFail = true;
      console.log('expected?.abilities => ', expected?.abilities);
      console.log('received?.abilities => ', received?.abilities);
    }
  }

  return matchFail;
}
