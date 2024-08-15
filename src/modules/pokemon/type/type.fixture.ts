import { IResponsePokemonByName } from '../pokemon.interface';
import { Type } from './type.entity';
import { TYPE_COLORS } from './type.constants';

const transformColor = (
  item: IResponsePokemonByName['types'][number],
): { textColor: string; backgroundColor: string } => {
  const typeColor = TYPE_COLORS.find((color) => color.name === item.type.name);

  return {
    textColor: !typeColor ? '#FFF' : typeColor.textColor,
    backgroundColor: !typeColor ? '#000' : typeColor.backgroundColor,
  };
};

export const transformResponseType = (
  response: IResponsePokemonByName['types'][number],
): Type => ({
  id: response.type.name,
  url: response.type.url,
  name: response.type.name,
  order: response.order,
  ...transformColor(response),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
});

export const RESPONSE_TYPE_FIXTURE: IResponsePokemonByName['types'] = [
  {
    slot: 1,
    order: 1,
    type: {
      url: 'https://pokeapi.co/api/v2/type/12/',
      name: 'grass',
    },
  },
  {
    slot: 2,
    order: 2,
    type: {
      url: 'https://pokeapi.co/api/v2/type/4/',
      name: 'poison',
    },
  },
];

export const ENTITY_TYPES_FIXTURE: Array<Type> = RESPONSE_TYPE_FIXTURE.map(
  (item) => transformResponseType(item),
);
