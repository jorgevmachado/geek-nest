import type {
  IResponsePaginate,
  IResponsePokemon,
} from '@/modules/pokemon/pokemon.interface';

export const RESPONSE_POKEMON_BASE_FIXTURE_BULBASAUR: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  name: 'bulbasaur',
  order: 1,
};

export const RESPONSE_POKEMON_BASE_FIXTURE_IVYSAUR: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/2/',
  name: 'ivysaur',
  order: 2,
};

export const RESPONSE_POKEMON_BASE_FIXTURE_VENUSAUR: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/3/',
  name: 'venusaur',
  order: 3,
};

export const RESPONSE_POKEMON_BASE_FIXTURE_LIST: Array<IResponsePokemon> = [
  RESPONSE_POKEMON_BASE_FIXTURE_BULBASAUR,
  RESPONSE_POKEMON_BASE_FIXTURE_IVYSAUR,
  RESPONSE_POKEMON_BASE_FIXTURE_VENUSAUR,
];

export const RESPONSE_POKEMON_BASE_FIXTURE_PAGINATE: IResponsePaginate<IResponsePokemon> =
  {
    count: 3,
    next: null,
    previous: null,
    results: RESPONSE_POKEMON_BASE_FIXTURE_LIST,
  };
