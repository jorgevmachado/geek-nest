import { type IPaginate } from '@/services';
import { PAGINATE } from '@/fixtures';

import {
  IResponseEvolution,
  IResponsePaginate,
  IResponsePokemon,
  IResponsePokemonByName,
  IResponsePokemonFull,
  IResponsePokemonSpecie,
} from './pokemon.interface';
import {
  responsePokemonFullToPokemon,
  responsePokemonToPokemon,
  responsePokemonToResponsePokemonByName,
  responsePokemonToResponsePokemonSpecie,
  responsesToResponsePokemonFull,
} from './pokemon.transformer';
import { Pokemon } from './pokemon.entity';

import { ENTITY_ABILITIES_FIXTURE } from './ability/ability.fixture';
import { ENTITY_MOVES_FIXTURE } from './move/move.fixture';
import { ENTITY_STATS_FIXTURE } from './stat/stat.fixture';
import { ENTITY_TYPES_FIXTURE } from './type/type.fixture';

export const RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  name: 'bulbasaur',
  order: 1,
};

export const RESPONSE_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/2/',
  name: 'ivysaur',
  order: 2,
};

export const RESPONSE_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/3/',
  name: 'venusaur',
  order: 3,
};

export const RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER: IResponsePokemon =
  {
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    name: 'charmander',
    order: 4,
  };

export const RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON: IResponsePokemon =
  {
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
    name: 'charmeleon',
    order: 5,
  };

export const RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/6/',
  name: 'charizard',
  order: 6,
};

export const RESPONSE_POKEMON_INCOMPLETE_FIXTURE_SQUIRTLE: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/7/',
  name: 'squirtle',
  order: 7,
};

export const RESPONSE_POKEMON_INCOMPLETE_FIXTURE_WARTORTLE: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/8/',
  name: 'wartortle',
  order: 8,
};

export const RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BLASTOISE: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/9/',
  name: 'blastoise',
  order: 9,
};

export const RESPONSE_POKEMONS_FIXTURE_LIST: Array<IResponsePokemon> = [
  RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR,
  RESPONSE_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
  RESPONSE_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
  RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER,
  RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON,
  RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD,
];

export const RESPONSE_POKEMONS_FIXTURE_PAGINATE: IResponsePaginate<IResponsePokemon> =
  {
    count: 1302,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    previous: null,
    results: RESPONSE_POKEMONS_FIXTURE_LIST,
  };

export const ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR: Pokemon =
  responsePokemonToPokemon({
    id: 'ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR',
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR,
  });

export const ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR: Pokemon =
  responsePokemonToPokemon({
    id: 'ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR',
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
  });

export const ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR: Pokemon =
  responsePokemonToPokemon({
    id: 'ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR',
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
  });

export const ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER: Pokemon =
  responsePokemonToPokemon({
    id: 'ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER',
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER,
  });

export const ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON: Pokemon =
  responsePokemonToPokemon({
    id: 'ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON',
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON,
  });

export const ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD: Pokemon =
  responsePokemonToPokemon({
    id: 'ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD',
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD,
  });

export const ENTITY_POKEMON_INCOMPLETE_FIXTURE_SQUIRTLE: Pokemon =
  responsePokemonToPokemon({
    id: 'ENTITY_POKEMON_INCOMPLETE_FIXTURE_SQUIRTLE',
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_SQUIRTLE,
  });

export const ENTITY_POKEMON_INCOMPLETE_FIXTURE_WARTORTLE: Pokemon =
  responsePokemonToPokemon({
    id: 'ENTITY_POKEMON_INCOMPLETE_FIXTURE_WARTORTLE',
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_WARTORTLE,
  });

export const ENTITY_POKEMON_INCOMPLETE_FIXTURE_BLASTOISE: Pokemon =
  responsePokemonToPokemon({
    id: 'ENTITY_POKEMON_INCOMPLETE_FIXTURE_BLASTOISE',
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BLASTOISE,
  });

export const ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST: Array<Pokemon> = [
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD,
];

export const ENTITY_POKEMONS_INCOMPLETE_FIXTURE_PAGINATE: IPaginate<Pokemon> = {
  ...PAGINATE,
  next: null,
  pages: 1,
  total: ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST.length,
  data: ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST,
};

export const RESPONSE_POKEMON_BY_NAME_FIXTURE_BULBASAUR: IResponsePokemonByName =
  responsePokemonToResponsePokemonByName(
    1,
    RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR,
  );

export const RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR: IResponsePokemonByName =
  responsePokemonToResponsePokemonByName(
    2,
    RESPONSE_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
  );

export const RESPONSE_POKEMON_BY_NAME_FIXTURE_VENUSAUR: IResponsePokemonByName =
  responsePokemonToResponsePokemonByName(
    3,
    RESPONSE_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
  );

export const RESPONSE_POKEMON_BY_NAME_FIXTURE_CHARMANDER: IResponsePokemonByName =
  responsePokemonToResponsePokemonByName(
    4,
    RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER,
  );

export const RESPONSE_POKEMON_BY_NAME_FIXTURE_CHARMELEON: IResponsePokemonByName =
  responsePokemonToResponsePokemonByName(
    5,
    RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON,
  );

export const RESPONSE_POKEMON_BY_NAME_FIXTURE_CHARIZARD: IResponsePokemonByName =
  responsePokemonToResponsePokemonByName(
    6,
    RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD,
  );

export const RESPONSE_POKEMON_BY_NAME_FIXTURE_SQUIRTLE: IResponsePokemonByName =
  responsePokemonToResponsePokemonByName(
    7,
    RESPONSE_POKEMON_INCOMPLETE_FIXTURE_SQUIRTLE,
  );

export const RESPONSE_POKEMON_BY_NAME_FIXTURE_WARTORTLE: IResponsePokemonByName =
  responsePokemonToResponsePokemonByName(
    8,
    RESPONSE_POKEMON_INCOMPLETE_FIXTURE_WARTORTLE,
  );

export const RESPONSE_POKEMON_BY_NAME_FIXTURE_BLASTOISE: IResponsePokemonByName =
  responsePokemonToResponsePokemonByName(
    9,
    RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BLASTOISE,
  );

export const RESPONSE_POKEMON_SPECIE_FIXTURE_BULBASAUR: IResponsePokemonSpecie =
  responsePokemonToResponsePokemonSpecie({
    id: 1,
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR,
  });

export const RESPONSE_POKEMON_SPECIE_FIXTURE_IVYSAUR: IResponsePokemonSpecie =
  responsePokemonToResponsePokemonSpecie({
    id: 2,
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
  });

export const RESPONSE_POKEMON_SPECIE_FIXTURE_VENUSAUR: IResponsePokemonSpecie =
  responsePokemonToResponsePokemonSpecie({
    id: 3,
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
  });

export const RESPONSE_POKEMON_SPECIE_FIXTURE_CHARMANDER: IResponsePokemonSpecie =
  responsePokemonToResponsePokemonSpecie({
    id: 4,
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER,
  });

export const RESPONSE_POKEMON_SPECIE_FIXTURE_CHARMELEON: IResponsePokemonSpecie =
  responsePokemonToResponsePokemonSpecie({
    id: 5,
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON,
  });

export const RESPONSE_POKEMON_SPECIE_FIXTURE_CHARIZARD: IResponsePokemonSpecie =
  responsePokemonToResponsePokemonSpecie({
    id: 6,
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD,
  });

export const RESPONSE_POKEMON_SPECIE_FIXTURE_SQUIRTLE: IResponsePokemonSpecie =
  responsePokemonToResponsePokemonSpecie({
    id: 7,
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_SQUIRTLE,
  });

export const RESPONSE_POKEMON_SPECIE_FIXTURE_WARTORTLE: IResponsePokemonSpecie =
  responsePokemonToResponsePokemonSpecie({
    id: 8,
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_WARTORTLE,
  });

export const RESPONSE_POKEMON_SPECIE_FIXTURE_BLASTOISE: IResponsePokemonSpecie =
  responsePokemonToResponsePokemonSpecie({
    id: 9,
    response: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BLASTOISE,
  });

export const RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR: IResponseEvolution =
  {
    baby_trigger_item: null,
    chain: {
      evolution_details: [],
      evolves_to: [
        {
          evolution_details: [
            {
              gender: null,
              held_item: null,
              item: null,
              known_move: null,
              known_move_type: null,
              location: null,
              min_affection: null,
              min_beauty: null,
              min_happiness: null,
              min_level: 16,
              needs_overworld_rain: false,
              party_species: null,
              party_type: null,
              relative_physical_stats: null,
              time_of_day: '',
              trade_species: null,
              trigger: {
                name: 'level-up',
                url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
              },
              turn_upside_down: false,
            },
          ],
          evolves_to: [
            {
              evolution_details: [
                {
                  gender: null,
                  held_item: null,
                  item: null,
                  known_move: null,
                  known_move_type: null,
                  location: null,
                  min_affection: null,
                  min_beauty: null,
                  min_happiness: null,
                  min_level: 32,
                  needs_overworld_rain: false,
                  party_species: null,
                  party_type: null,
                  relative_physical_stats: null,
                  time_of_day: '',
                  trade_species: null,
                  trigger: {
                    name: 'level-up',
                    url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
                  },
                  turn_upside_down: false,
                },
              ],
              evolves_to: [],
              is_baby: false,
              species: {
                name: 'venusaur',
                url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
              },
            },
          ],
          is_baby: false,
          species: {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
          },
        },
      ],
      is_baby: false,
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
      },
    },
    id: 1,
  };

export const RESPONSE_POKEMON_FULL_FIXTURE_BULBASAUR: IResponsePokemonFull =
  responsesToResponsePokemonFull({
    id: 'RESPONSE_POKEMON_FULL_FIXTURE_BULBASAUR',
    responsePokemon: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR,
    responsePokemonByName: RESPONSE_POKEMON_BY_NAME_FIXTURE_BULBASAUR,
    responsePokemonSpecie: RESPONSE_POKEMON_SPECIE_FIXTURE_BULBASAUR,
  });

export const RESPONSE_POKEMON_FULL_FIXTURE_IVYSAUR: IResponsePokemonFull =
  responsesToResponsePokemonFull({
    id: 'RESPONSE_POKEMON_FULL_FIXTURE_IVYSAUR',
    responsePokemon: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
    responsePokemonByName: RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR,
    responsePokemonSpecie: RESPONSE_POKEMON_SPECIE_FIXTURE_IVYSAUR,
  });

export const RESPONSE_POKEMON_FULL_FIXTURE_VENUSAUR: IResponsePokemonFull =
  responsesToResponsePokemonFull({
    id: 'RESPONSE_POKEMON_FULL_FIXTURE_VENUSAUR',
    responsePokemon: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
    responsePokemonByName: RESPONSE_POKEMON_BY_NAME_FIXTURE_VENUSAUR,
    responsePokemonSpecie: RESPONSE_POKEMON_SPECIE_FIXTURE_VENUSAUR,
  });

export const RESPONSE_POKEMON_FULL_FIXTURE_CHARMANDER: IResponsePokemonFull =
  responsesToResponsePokemonFull({
    id: 'RESPONSE_POKEMON_FULL_FIXTURE_CHARMANDER',
    responsePokemon: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER,
    responsePokemonByName: RESPONSE_POKEMON_BY_NAME_FIXTURE_CHARMANDER,
    responsePokemonSpecie: RESPONSE_POKEMON_SPECIE_FIXTURE_CHARMANDER,
  });

export const RESPONSE_POKEMON_FULL_FIXTURE_CHARMELEON: IResponsePokemonFull =
  responsesToResponsePokemonFull({
    id: 'RESPONSE_POKEMON_FULL_FIXTURE_CHARMELEON',
    responsePokemon: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON,
    responsePokemonByName: RESPONSE_POKEMON_BY_NAME_FIXTURE_CHARMELEON,
    responsePokemonSpecie: RESPONSE_POKEMON_SPECIE_FIXTURE_CHARMELEON,
  });

export const RESPONSE_POKEMON_FULL_FIXTURE_CHARIZARD: IResponsePokemonFull =
  responsesToResponsePokemonFull({
    id: 'RESPONSE_POKEMON_FULL_FIXTURE_CHARIZARD',
    responsePokemon: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD,
    responsePokemonByName: RESPONSE_POKEMON_BY_NAME_FIXTURE_CHARIZARD,
    responsePokemonSpecie: RESPONSE_POKEMON_SPECIE_FIXTURE_CHARIZARD,
  });

export const RESPONSE_POKEMON_FULL_FIXTURE_SQUIRTLE: IResponsePokemonFull =
  responsesToResponsePokemonFull({
    id: 'RESPONSE_POKEMON_FULL_FIXTURE_SQUIRTLE',
    responsePokemon: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_SQUIRTLE,
    responsePokemonByName: RESPONSE_POKEMON_BY_NAME_FIXTURE_SQUIRTLE,
    responsePokemonSpecie: RESPONSE_POKEMON_SPECIE_FIXTURE_SQUIRTLE,
  });

export const RESPONSE_POKEMON_FULL_FIXTURE_WARTORTLE: IResponsePokemonFull =
  responsesToResponsePokemonFull({
    id: 'RESPONSE_POKEMON_FULL_FIXTURE_WARTORTLE',
    responsePokemon: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_WARTORTLE,
    responsePokemonByName: RESPONSE_POKEMON_BY_NAME_FIXTURE_WARTORTLE,
    responsePokemonSpecie: RESPONSE_POKEMON_SPECIE_FIXTURE_WARTORTLE,
  });

export const RESPONSE_POKEMON_FULL_FIXTURE_BLASTOISE: IResponsePokemonFull =
  responsesToResponsePokemonFull({
    id: 'RESPONSE_POKEMON_FULL_FIXTURE_BLASTOISE',
    responsePokemon: RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BLASTOISE,
    responsePokemonByName: RESPONSE_POKEMON_BY_NAME_FIXTURE_BLASTOISE,
    responsePokemonSpecie: RESPONSE_POKEMON_SPECIE_FIXTURE_BLASTOISE,
  });

export const ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR: Pokemon =
  responsePokemonFullToPokemon({
    id: 'ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR',
    stats: ENTITY_STATS_FIXTURE,
    types: ENTITY_TYPES_FIXTURE,
    moves: ENTITY_MOVES_FIXTURE,
    response: RESPONSE_POKEMON_FULL_FIXTURE_BULBASAUR,
    evolutions: [
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
    ],
    abilities: ENTITY_ABILITIES_FIXTURE,
  });

export const ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR: Pokemon =
  responsePokemonFullToPokemon({
    id: 'ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR',
    stats: ENTITY_STATS_FIXTURE,
    types: ENTITY_TYPES_FIXTURE,
    moves: ENTITY_MOVES_FIXTURE,
    response: RESPONSE_POKEMON_FULL_FIXTURE_IVYSAUR,
    evolutions: [
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
    ],
    abilities: ENTITY_ABILITIES_FIXTURE,
  });

export const ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR: Pokemon =
  responsePokemonFullToPokemon({
    id: 'ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR',
    stats: ENTITY_STATS_FIXTURE,
    types: ENTITY_TYPES_FIXTURE,
    moves: ENTITY_MOVES_FIXTURE,
    response: RESPONSE_POKEMON_FULL_FIXTURE_VENUSAUR,
    evolutions: [
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
    ],
    abilities: ENTITY_ABILITIES_FIXTURE,
  });

export const ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER: Pokemon =
  responsePokemonFullToPokemon({
    id: 'ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER',
    stats: ENTITY_STATS_FIXTURE,
    types: ENTITY_TYPES_FIXTURE,
    moves: ENTITY_MOVES_FIXTURE,
    response: RESPONSE_POKEMON_FULL_FIXTURE_CHARMANDER,
    evolutions: [
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD,
    ],
    abilities: ENTITY_ABILITIES_FIXTURE,
  });

export const ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMELEON: Pokemon =
  responsePokemonFullToPokemon({
    id: 'ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMELEON',
    stats: ENTITY_STATS_FIXTURE,
    types: ENTITY_TYPES_FIXTURE,
    moves: ENTITY_MOVES_FIXTURE,
    response: RESPONSE_POKEMON_FULL_FIXTURE_CHARMELEON,
    evolutions: [
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD,
    ],
    abilities: ENTITY_ABILITIES_FIXTURE,
  });

export const ENTITY_POKEMON_COMPLETE_FIXTURE_CHARIZARD: Pokemon =
  responsePokemonFullToPokemon({
    id: 'ENTITY_POKEMON_COMPLETE_FIXTURE_CHARIZARD',
    stats: ENTITY_STATS_FIXTURE,
    types: ENTITY_TYPES_FIXTURE,
    moves: ENTITY_MOVES_FIXTURE,
    response: RESPONSE_POKEMON_FULL_FIXTURE_CHARIZARD,
    evolutions: [
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD,
    ],
    abilities: ENTITY_ABILITIES_FIXTURE,
  });

export const ENTITY_POKEMON_COMPLETE_FIXTURE_SQUIRTLE: Pokemon =
  responsePokemonFullToPokemon({
    id: 'ENTITY_POKEMON_COMPLETE_FIXTURE_SQUIRTLE',
    stats: ENTITY_STATS_FIXTURE,
    types: ENTITY_TYPES_FIXTURE,
    moves: ENTITY_MOVES_FIXTURE,
    response: RESPONSE_POKEMON_FULL_FIXTURE_SQUIRTLE,
    evolutions: [
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_SQUIRTLE,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_WARTORTLE,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_BLASTOISE,
    ],
    abilities: ENTITY_ABILITIES_FIXTURE,
  });

export const ENTITY_POKEMON_COMPLETE_FIXTURE_WARTORTLE: Pokemon =
  responsePokemonFullToPokemon({
    id: 'ENTITY_POKEMON_COMPLETE_FIXTURE_WARTORTLE',
    stats: ENTITY_STATS_FIXTURE,
    types: ENTITY_TYPES_FIXTURE,
    moves: ENTITY_MOVES_FIXTURE,
    response: RESPONSE_POKEMON_FULL_FIXTURE_WARTORTLE,
    evolutions: [
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_SQUIRTLE,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_WARTORTLE,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_BLASTOISE,
    ],
    abilities: ENTITY_ABILITIES_FIXTURE,
  });

export const ENTITY_POKEMON_COMPLETE_FIXTURE_BLASTOISE: Pokemon =
  responsePokemonFullToPokemon({
    id: 'ENTITY_POKEMON_COMPLETE_FIXTURE_WARTORTLE',
    stats: ENTITY_STATS_FIXTURE,
    types: ENTITY_TYPES_FIXTURE,
    moves: ENTITY_MOVES_FIXTURE,
    response: RESPONSE_POKEMON_FULL_FIXTURE_BLASTOISE,
    evolutions: [
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_SQUIRTLE,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_WARTORTLE,
      ENTITY_POKEMON_INCOMPLETE_FIXTURE_BLASTOISE,
    ],
    abilities: ENTITY_ABILITIES_FIXTURE,
  });
