import {
  EStatus,
  IResponsePaginate,
  IResponsePokemon,
} from './pokemon.interface';
import { Pokemon } from './pokemon.entity';

const transformResponsePokemon = ({
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
}): Pokemon => {
  return {
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
  };
};

export const RESPONSE_POKEMONS_FIXTURE: Array<IResponsePokemon> = [
  {
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    name: 'bulbasaur',
    order: 1,
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
    order: 2,
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
    order: 3,
  },
  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    order: 4,
  },
  {
    name: 'charmeleon',
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
    order: 5,
  },
  {
    name: 'charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/',
    order: 6,
  },
];

export const RESPONSE_POKEMONS_PAGINATE_FIXTURE: IResponsePaginate<IResponsePokemon> =
  {
    count: 1302,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    previous: null,
    results: RESPONSE_POKEMONS_FIXTURE,
  };

export const POKEMONS_INCOMPLETE_FIXTURE: Array<Pokemon> =
  RESPONSE_POKEMONS_FIXTURE.map((item) =>
    transformResponsePokemon({ response: item }),
  );
