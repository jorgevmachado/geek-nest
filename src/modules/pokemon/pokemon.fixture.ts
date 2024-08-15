import {
  EStatus,
  IResponsePaginate,
  IResponsePokemon,
  IResponsePokemonByName,
  IResponsePokemonFull,
  IResponsePokemonSpecie,
} from './pokemon.interface';
import { Pokemon } from './pokemon.entity';
import {
  ENTITY_MOVES_FIXTURE,
  RESPONSE_MOVE_FIXTURE,
} from './move/move.fixture';
import {
  ENTITY_STATS_FIXTURE,
  RESPONSE_STAT_FIXTURE,
} from './stat/stat.fixture';
import {
  ENTITY_TYPES_FIXTURE,
  RESPONSE_TYPE_FIXTURE,
} from './type/type.fixture';
import {
  ENTITY_ABILITIES_FIXTURE,
  RESPONSE_ABILITY_FIXTURE,
} from './ability/ability.fixture';
import { Move } from './move/move.entity';
import { Type } from './type/type.entity';
import { Stat } from './stat/stat.entity';
import { Ability } from './ability/ability.entity';

export const transformResponsePokemon = ({
  id = 'POKEMON_INCOMPLETE_FIXTURE',
  status = EStatus.INCOMPLETE,
  response,
  createdAt = '2024-08-07',
  updatedAt = '2024-08-08',
}: {
  id?: string;
  status?: EStatus;
  response: IResponsePokemon;
  createdAt?: string;
  updatedAt?: string;
}): Pokemon => ({
  id,
  url: response.url,
  name: response.name,
  image: null,
  order: response.order,
  status,
  habitat: null,
  is_baby: null,
  shape_url: null,
  shape_name: null,
  is_mythical: null,
  gender_rate: null,
  is_legendary: null,
  capture_rate: null,
  hatch_counter: null,
  base_happiness: null,
  evolution_chain_url: null,
  evolves_from_species: null,
  has_gender_differences: null,
  createdAt: new Date(createdAt),
  updatedAt: new Date(updatedAt),
  deletedAt: null,
});

export const transformResponsePokemonByName = ({
  response,
}: {
  response: IResponsePokemon;
}): IResponsePokemonByName => ({
  id: response.order,
  name: response.name,
  order: response.order,
  cries: {
    latest:
      'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg',
    legacy:
      'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg',
  },
  moves: RESPONSE_MOVE_FIXTURE,
  forms: {
    url: response.url,
    name: response.name,
  },
  stats: RESPONSE_STAT_FIXTURE,
  types: RESPONSE_TYPE_FIXTURE,
  weight: 69,
  height: 7,
  species: {
    url: response.url,
    name: response.name,
  },
  sprites: {
    other: {
      home: {
        front_shiny: '',
        front_female: '',
        front_default: '',
        front_shiny_female: '',
      },
      showdown: {
        back_shiny: '',
        front_shiny: '',
        back_female: '',
        front_female: '',
        back_default: '',
        front_default: '',
        back_shiny_female: '',
        front_shiny_female: '',
      },
      dream_world: {
        front_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      },
      'official-artwork': {
        front_shiny: '',
        front_default: '',
      },
    },
    versions: {
      'generation-i': {
        'red-blue': {
          back_gray: '',
          front_gray: '',
          back_default: '',
          front_default: '',
          back_transparent: '',
          front_transparent: '',
        },
        yellow: {
          back_gray: '',
          front_gray: '',
          back_default: '',
          front_default: '',
          back_transparent: '',
          front_transparent: '',
        },
      },
      'generation-ii': {
        crystal: {
          back_shiny: '',
          front_shiny: '',
          back_default: '',
          front_default: '',
          back_transparent: '',
          back_shiny_female: '',
          front_transparent: '',
          front_shiny_female: '',
        },
        gold: {
          back_shiny: '',
          front_shiny: '',
          back_default: '',
          front_default: '',
          front_transparent: '',
        },
        silver: {
          back_shiny: '',
          front_shiny: '',
          back_default: '',
          front_default: '',
          front_transparent: '',
        },
      },
      'generation-iii': {
        emerald: {
          front_shiny: '',
          front_default: '',
        },
        'ruby-sapphire': {
          back_shiny: '',
          front_shiny: '',
          back_default: '',
          front_default: '',
        },
        'firered-leafgreen': {
          back_shiny: '',
          front_shiny: '',
          back_default: '',
          front_default: '',
        },
      },
      'generation-iv': {
        platinum: {
          back_shiny: '',
          front_shiny: '',
          back_female: '',
          front_female: '',
          back_default: '',
          front_default: '',
          back_shiny_female: '',
          front_shiny_female: '',
        },
        'diamond-pearl': {
          back_shiny: '',
          front_shiny: '',
          back_female: '',
          front_female: '',
          back_default: '',
          front_default: '',
          back_shiny_female: '',
          front_shiny_female: '',
        },
        'heartgold-soulsilver': {
          back_shiny: '',
          front_shiny: '',
          back_female: '',
          front_female: '',
          back_default: '',
          front_default: '',
          back_shiny_female: '',
          front_shiny_female: '',
        },
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_shiny: '',
            front_shiny: '',
            back_female: '',
            back_default: '',
            front_default: '',
            front_female: '',
            back_shiny_female: '',
            front_shiny_female: '',
          },
          back_shiny: '',
          front_shiny: '',
          back_female: '',
          front_female: '',
          back_default: '',
          front_default: '',
          back_shiny_female: '',
          front_shiny_female: '',
        },
      },
      'generation-vi': {
        'x-y': {
          front_shiny: '',
          front_female: '',
          front_default: '',
          front_shiny_female: '',
        },
        'omegaruby-alphasapphire': {
          front_shiny: '',
          front_female: '',
          front_default: '',
          front_shiny_female: '',
        },
      },
      'generation-vii': {
        icons: {
          front_female: '',
          front_default: '',
        },
        'ultra-sun-ultra-moon': {
          front_shiny: '',
          front_female: '',
          front_default: '',
          front_shiny_female: '',
        },
      },
      'generation-viii': {
        icons: {
          front_female: '',
          front_default: '',
        },
      },
    },
    back_shiny: '',
    front_shiny: '',
    back_female: '',
    front_female: '',
    back_default: '',
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    back_shiny_female: '',
    front_shiny_female: '',
  },
  abilities: RESPONSE_ABILITY_FIXTURE,
  is_default: true,
  past_types: [],
  held_items: [],
  game_indices: [
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/1/',
        name: 'red',
      },
      game_index: 153,
    },
    {
      version: {
        url: 'https://pokeapi.co/api/v2/version/2/',
        name: 'blue',
      },
      game_index: 153,
    },
  ],
  past_abilities: [],
  base_experience: 64,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
});

export const transformResponsePokemonSpecie = ({
  color = {
    url: 'https://pokeapi.co/api/v2/pokemon-color/5/',
    name: 'green',
  },
  shape = {
    url: 'https://pokeapi.co/api/v2/pokemon-shape/8/',
    name: 'quadruped',
  },
  habitat = {
    url: 'https://pokeapi.co/api/v2/pokemon-habitat/3/',
    name: 'grassland',
  },
  response,
}: {
  color?: IResponsePokemonSpecie['color'];
  shape?: IResponsePokemonSpecie['shape'];
  habitat?: IResponsePokemonSpecie['habitat'];
  response: IResponsePokemon;
}): IResponsePokemonSpecie => ({
  id: response.order,
  name: response.name,
  order: response.order,
  names: [
    {
      name: response.name,
      language: {
        url: response.url,
        name: response.name,
      },
    },
  ],
  color,
  shape,
  genera: [
    {
      genus: 'たねポケモン',
      language: {
        url: 'https://pokeapi.co/api/v2/language/1/',
        name: 'ja-Hrkt',
      },
    },
  ],
  habitat,
  is_baby: false,
  varieties: [
    {
      is_default: true,
      pokemon: {
        url: response.url,
        name: response.name,
      },
    },
  ],
  egg_groups: [
    {
      url: response.url,
      name: response.name,
    },
  ],
  generation: {
    url: 'generation-i',
    name: 'https://pokeapi.co/api/v2/generation/1/',
  },
  growth_rate: {
    url: 'https://pokeapi.co/api/v2/growth-rate/4/',
    name: 'medium-slow',
  },
  gender_rate: 0,
  is_mythical: false,
  is_legendary: false,
  capture_rate: 0,
  hatch_counter: 0,
  base_happiness: 0,
  evolution_chain: {
    url: 'https://pokeapi.co/api/v2/evolution-chain/1/',
  },
  pokedex_numbers: [
    {
      pokedex: {
        url: 'https://pokeapi.co/api/v2/pokedex/1/',
        name: 'national',
      },
      entry_number: 1,
    },
  ],
  forms_switchable: false,
  form_descriptions: [],
  pal_park_encounters: [],
  flavor_text_entries: [],
  evolves_from_species: null,
  has_gender_differences: false,
});

export const transformResponsePokemonFull = ({
  response,
  responsePokemonByName,
  responsePokemonBySpecie,
}: {
  response: IResponsePokemon;
  responsePokemonByName: IResponsePokemonByName;
  responsePokemonBySpecie: IResponsePokemonSpecie;
}): IResponsePokemonFull => ({
  id: 'RESPONSE_POKEMON_FULL',
  url: response.url,
  name: responsePokemonByName.name,
  order: response.order,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  types: responsePokemonByName.types,
  stats: responsePokemonByName.stats,
  moves: responsePokemonByName.moves,
  habitat: responsePokemonBySpecie.habitat.name,
  is_baby: responsePokemonBySpecie.is_baby,
  shape_url: responsePokemonBySpecie.shape.url,
  abilities: responsePokemonByName.abilities,
  shape_name: responsePokemonBySpecie.shape.name,
  is_mythical: responsePokemonBySpecie.is_mythical,
  gender_rate: responsePokemonBySpecie.gender_rate,
  is_legendary: responsePokemonBySpecie.is_legendary,
  capture_rate: responsePokemonBySpecie.capture_rate,
  hatch_counter: responsePokemonBySpecie.hatch_counter,
  base_happiness: responsePokemonBySpecie.base_happiness,
  evolution_chain_url: responsePokemonBySpecie.evolution_chain.url,
  evolves_from_species: responsePokemonBySpecie.evolves_from_species,
  has_gender_differences: responsePokemonBySpecie.has_gender_differences,
});

export const transformResponsePokemonFullPokemon = ({
  types,
  stats,
  moves,
  response,
  abilities,
}: {
  types: Array<Type>;
  stats: Array<Stat>;
  moves: Array<Move>;
  response: IResponsePokemonFull;
  abilities: Array<Ability>;
}): Pokemon => ({
  id: response.id,
  url: response.url,
  name: response.name,
  image: response.image,
  moves,
  order: response.order,
  types,
  stats,
  status: EStatus.COMPLETE,
  habitat: response.habitat,
  is_baby: response.is_baby,
  shape_url: response.shape_url,
  abilities,
  shape_name: response.shape_name,
  is_mythical: response.is_mythical,
  gender_rate: response.gender_rate,
  is_legendary: response.is_legendary,
  capture_rate: response.capture_rate,
  hatch_counter: response.hatch_counter,
  base_happiness: response.base_happiness,
  evolution_chain_url: response.evolution_chain_url,
  evolves_from_species: response.evolves_from_species,
  has_gender_differences: response.has_gender_differences,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
});

export const RESPONSE_POKEMON_FIXTURE_INCOMPLETE_BULBASAUR: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  name: 'bulbasaur',
  order: 1,
};

export const RESPONSE_POKEMON_FIXTURE_INCOMPLETE_IVYSAUR: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/2/',
  name: 'ivysaur',
  order: 2,
};

export const RESPONSE_POKEMON_FIXTURE_INCOMPLETE_VENUSAUR: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/3/',
  name: 'venusaur',
  order: 3,
};

export const RESPONSE_POKEMON_FIXTURE_INCOMPLETE_CHARMANDER: IResponsePokemon =
  {
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    name: 'charmander',
    order: 4,
  };

export const RESPONSE_POKEMON_FIXTURE_INCOMPLETE_CHARMELEON: IResponsePokemon =
  {
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
    name: 'charmeleon',
    order: 5,
  };

export const RESPONSE_POKEMON_FIXTURE_INCOMPLETE_CHARIZARD: IResponsePokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/6/',
  name: 'charizard',
  order: 6,
};

export const RESPONSE_POKEMONS_FIXTURE_LIST: Array<IResponsePokemon> = [
  RESPONSE_POKEMON_FIXTURE_INCOMPLETE_BULBASAUR,
  RESPONSE_POKEMON_FIXTURE_INCOMPLETE_IVYSAUR,
  RESPONSE_POKEMON_FIXTURE_INCOMPLETE_VENUSAUR,
  RESPONSE_POKEMON_FIXTURE_INCOMPLETE_CHARMANDER,
  RESPONSE_POKEMON_FIXTURE_INCOMPLETE_CHARMELEON,
  RESPONSE_POKEMON_FIXTURE_INCOMPLETE_CHARIZARD,
];

export const RESPONSE_POKEMON_FULL: IResponsePokemonFull =
  transformResponsePokemonFull({
    response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_BULBASAUR,
    responsePokemonByName: transformResponsePokemonByName({
      response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_BULBASAUR,
    }),
    responsePokemonBySpecie: transformResponsePokemonSpecie({
      response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_BULBASAUR,
    }),
  });

export const POKEMONS_INCOMPLETE_FIXTURE: Array<Pokemon> =
  RESPONSE_POKEMONS_FIXTURE_LIST.map((item) =>
    transformResponsePokemon({ response: item }),
  );

export const RESPONSE_POKEMONS_PAGINATE_FIXTURE: IResponsePaginate<IResponsePokemon> =
  {
    count: 1302,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    previous: null,
    results: RESPONSE_POKEMONS_FIXTURE_LIST,
  };

export const ENTITY_POKEMON_INCOMPLETE_BULBASAUR: Pokemon =
  transformResponsePokemon({
    response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_BULBASAUR,
  });

export const ENTITY_POKEMON_INCOMPLETE_IVYSAUR: Pokemon =
  transformResponsePokemon({
    response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_IVYSAUR,
  });

export const ENTITY_POKEMON_INCOMPLETE_VENUSAUR: Pokemon =
  transformResponsePokemon({
    response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_VENUSAUR,
  });

export const ENTITY_POKEMON_INCOMPLETE_CHARMANDER: Pokemon =
  transformResponsePokemon({
    response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_CHARMANDER,
  });

export const ENTITY_POKEMON_INCOMPLETE_CHARMELEON: Pokemon =
  transformResponsePokemon({
    response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_CHARMELEON,
  });

export const ENTITY_POKEMON_INCOMPLETE_CHARIZARD: Pokemon =
  transformResponsePokemon({
    response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_CHARIZARD,
  });

export const ENTITY_POKEMONS_INCOMPLETE_LIST: Array<Pokemon> = [
  ENTITY_POKEMON_INCOMPLETE_BULBASAUR,
  ENTITY_POKEMON_INCOMPLETE_IVYSAUR,
  ENTITY_POKEMON_INCOMPLETE_VENUSAUR,
  ENTITY_POKEMON_INCOMPLETE_CHARMANDER,
  ENTITY_POKEMON_INCOMPLETE_CHARMELEON,
  ENTITY_POKEMON_INCOMPLETE_CHARIZARD,
];

export const ENTITY_POKEMON: Pokemon = transformResponsePokemonFullPokemon({
  stats: ENTITY_STATS_FIXTURE,
  types: ENTITY_TYPES_FIXTURE,
  moves: ENTITY_MOVES_FIXTURE,
  abilities: ENTITY_ABILITIES_FIXTURE,
  response: RESPONSE_POKEMON_FULL,
});
