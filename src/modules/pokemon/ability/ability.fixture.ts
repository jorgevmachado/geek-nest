import { Ability } from './ability.entity';
import { type IResponsePokemonByName } from '../pokemon.interface';

const transformResponseAbility = (
  response: IResponsePokemonByName['abilities'][number],
): Ability => ({
  id: response.ability.name,
  url: response.ability.url,
  slot: response.slot,
  order: response.order,
  name: response.ability.name,
  is_hidden: response.is_hidden,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
});

export const RESPONSE_ABILITY_FIXTURE: IResponsePokemonByName['abilities'] = [
  {
    slot: 1,
    order: 1,
    ability: {
      url: 'https://pokeapi.co/api/v2/ability/65/',
      name: 'overgrow',
    },
    is_hidden: false,
  },
  {
    slot: 2,
    order: 2,
    ability: {
      url: 'https://pokeapi.co/api/v2/ability/34/',
      name: 'chlorophyll',
    },
    is_hidden: true,
  },
];

export const ENTITY_ABILITIES_FIXTURE: Array<Ability> =
  RESPONSE_ABILITY_FIXTURE.map((item) => transformResponseAbility(item));
