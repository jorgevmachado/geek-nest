import { IResponsePokemonByName } from '../pokemon.interface';
import { Stat } from './stat.entity';

export const transformResponseStat = (
  response: IResponsePokemonByName['stats'][number],
): Stat => ({
  id: response.stat.name,
  url: response.stat.url,
  name: response.stat.name,
  order: response.order,
  effort: response.effort,
  base_stat: response.base_stat,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
});
export const RESPONSE_STAT_FIXTURE: IResponsePokemonByName['stats'] = [
  {
    order: 1,
    stat: {
      url: 'https://pokeapi.co/api/v2/stat/1/',
      name: 'hp',
    },
    effort: 0,
    base_stat: 45,
  },
  {
    order: 2,
    stat: {
      url: 'https://pokeapi.co/api/v2/stat/2/',
      name: 'attack',
    },
    effort: 0,
    base_stat: 49,
  },
  {
    order: 3,
    stat: {
      url: 'https://pokeapi.co/api/v2/stat/3/',
      name: 'defense',
    },
    effort: 0,
    base_stat: 49,
  },
  {
    order: 4,
    stat: {
      url: 'https://pokeapi.co/api/v2/stat/4/',
      name: 'special-attack',
    },
    effort: 1,
    base_stat: 65,
  },
];

export const ENTITY_STATS_FIXTURE: Array<Stat> = RESPONSE_STAT_FIXTURE.map(
  (item) => transformResponseStat(item),
);
