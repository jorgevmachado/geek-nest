import {
  IResponsePokemon,
  IResponsePokemonByName,
  IResponsePokemonFull,
  IResponsePokemonSpecie,
} from './pokemon.interface';
import { Pokemon } from './pokemon.entity';
import { Move } from './move/move.entity';
import { Type } from './type/type.entity';
import { Stat } from './stat/stat.entity';
import { Ability } from './ability/ability.entity';
import { RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR } from './pokemon.fixture';
import { RESPONSE_MOVE_FIXTURE } from './move/move.fixture';
import { RESPONSE_STAT_FIXTURE } from './stat/stat.fixture';
import { RESPONSE_ABILITY_FIXTURE } from './ability/ability.fixture';
import { RESPONSE_TYPES_FIXTURE } from './type/type.fixture';
import { EStatus } from '@/enums/status.enum';

interface IToPokemonProps {
  id?: string;
  url?: string;
  name?: string;
  image?: string;
  moves?: Array<Move>;
  order?: number;
  types?: Array<Type>;
  stats?: Array<Stat>;
  status?: EStatus;
  habitat?: string;
  is_baby?: boolean;
  shape_url?: string;
  abilities?: Array<Ability>;
  evolutions?: Array<Pokemon>;
  shape_name?: string;
  is_mythical?: boolean;
  gender_rate?: number;
  is_legendary?: boolean;
  capture_rate?: number;
  hatch_counter?: number;
  base_happiness?: number;
  evolution_chain_url?: string;
  evolves_from_species?: string;
  has_gender_differences?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

function toPokemon({
  id = 'POKEMON_INCOMPLETE_FIXTURE',
  url = RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR.url,
  name = RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR.name,
  image,
  moves,
  order = RESPONSE_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR.order,
  types,
  stats,
  status = EStatus.INCOMPLETE,
  habitat,
  is_baby,
  shape_url,
  abilities,
  evolutions,
  shape_name,
  is_mythical,
  gender_rate,
  is_legendary,
  capture_rate,
  hatch_counter,
  base_happiness,
  evolution_chain_url,
  evolves_from_species,
  has_gender_differences,
  createdAt = new Date('2024-08-07'),
  updatedAt = new Date('2024-08-07'),
  deletedAt = null,
}: IToPokemonProps): Pokemon {
  const pokemon = new Pokemon();
  pokemon.id = id;
  pokemon.url = url;
  pokemon.name = name;
  pokemon.image = image;
  pokemon.moves = moves;
  pokemon.order = order;
  pokemon.types = types;
  pokemon.stats = stats;
  pokemon.status = status;
  pokemon.habitat = habitat;
  pokemon.is_baby = is_baby;
  pokemon.shape_url = shape_url;
  pokemon.abilities = abilities;
  pokemon.evolutions = evolutions;
  pokemon.shape_name = shape_name;
  pokemon.is_mythical = is_mythical;
  pokemon.gender_rate = gender_rate;
  pokemon.is_legendary = is_legendary;
  pokemon.capture_rate = capture_rate;
  pokemon.hatch_counter = hatch_counter;
  pokemon.base_happiness = base_happiness;
  pokemon.evolution_chain_url = evolution_chain_url;
  pokemon.evolves_from_species = evolves_from_species;
  pokemon.has_gender_differences = has_gender_differences;
  pokemon.createdAt = createdAt;
  pokemon.updatedAt = updatedAt;
  pokemon.deletedAt = deletedAt;
  return pokemon;
}

interface IResponsePokemonToPokemonProps {
  id?: string;
  status?: EStatus;
  response: IResponsePokemon;
  createdAt?: string;
  updatedAt?: string;
}
export function responsePokemonToPokemon({
  id,
  status,
  response,
  createdAt,
  updatedAt,
}: IResponsePokemonToPokemonProps): Pokemon {
  return toPokemon({
    id,
    status,
    url: response.url,
    name: response.name,
    order: response.order,
    createdAt: !createdAt ? undefined : new Date(createdAt),
    updatedAt: !updatedAt ? undefined : new Date(updatedAt),
  });
}

interface IResponsePokemonFullToPokemonProps {
  id: string;
  moves: Array<Move>;
  types: Array<Type>;
  stats: Array<Stat>;
  response: IResponsePokemonFull;
  abilities: Array<Ability>;
  evolutions: Array<Pokemon>;
}

export function responsePokemonFullToPokemon({
  id,
  moves,
  types,
  stats,
  response,
  abilities,
  evolutions,
}: IResponsePokemonFullToPokemonProps) {
  return toPokemon({
    id,
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
    evolutions,
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
  });
}

export function responsePokemonToResponsePokemonByName(
  id: number,
  response: IResponsePokemon,
): IResponsePokemonByName {
  return {
    id,
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
    types: RESPONSE_TYPES_FIXTURE,
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
  };
}

interface IResponsePokemonToResponsePokemonSpecieProps {
  id: number;
  color?: IResponsePokemonSpecie['color'];
  shape?: IResponsePokemonSpecie['shape'];
  habitat?: IResponsePokemonSpecie['habitat'];
  response: IResponsePokemon;
}

export function responsePokemonToResponsePokemonSpecie({
  id,
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
}: IResponsePokemonToResponsePokemonSpecieProps): IResponsePokemonSpecie {
  return {
    id,
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
  };
}

interface IResponsePokemonToResponsePokemonFullProps {
  id?: string;
  image?: string;
  responsePokemon: IResponsePokemon;
  responsePokemonByName: IResponsePokemonByName;
  responsePokemonSpecie: IResponsePokemonSpecie;
}
export function responsesToResponsePokemonFull({
  id = 'RESPONSE_POKEMON_FULL',
  image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  responsePokemon,
  responsePokemonByName,
  responsePokemonSpecie,
}: IResponsePokemonToResponsePokemonFullProps): IResponsePokemonFull {
  return {
    id,
    url: responsePokemon.url,
    name: responsePokemonByName.name,
    order: responsePokemon.order,
    image,
    types: responsePokemonByName.types,
    stats: responsePokemonByName.stats,
    moves: responsePokemonByName.moves,
    habitat: responsePokemonSpecie.habitat.name,
    is_baby: responsePokemonSpecie.is_baby,
    shape_url: responsePokemonSpecie.shape.url,
    abilities: responsePokemonByName.abilities,
    shape_name: responsePokemonSpecie.shape.name,
    is_mythical: responsePokemonSpecie.is_mythical,
    gender_rate: responsePokemonSpecie.gender_rate,
    is_legendary: responsePokemonSpecie.is_legendary,
    capture_rate: responsePokemonSpecie.capture_rate,
    hatch_counter: responsePokemonSpecie.hatch_counter,
    base_happiness: responsePokemonSpecie.base_happiness,
    evolution_chain_url: responsePokemonSpecie.evolution_chain.url,
    evolves_from_species: responsePokemonSpecie.evolves_from_species,
    has_gender_differences: responsePokemonSpecie.has_gender_differences,
  };
}
