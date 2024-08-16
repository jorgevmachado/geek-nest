import { IResponsePokemonByName } from '../pokemon.interface';
import { Move } from './move.entity';

const transformResponseMove = (
  response: IResponsePokemonByName['moves'][number],
): Move => ({
  id: response.move.name,
  url: response.move.url,
  order: response.order,
  name: response.move.name,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
});

export const RESPONSE_MOVE_FIXTURE: IResponsePokemonByName['moves'] = [
  {
    order: 1,
    move: {
      url: 'https://pokeapi.co/api/v2/move/13/',
      name: 'razor-wind',
    },
    version_group_details: [
      {
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/3/',
          name: 'gold-silver',
        },
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          name: 'egg',
        },
      },
      {
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/4/',
          name: 'crystal',
        },
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          name: 'egg',
        },
      },
    ],
  },
  {
    order: 2,
    move: {
      url: 'https://pokeapi.co/api/v2/move/14/',
      name: 'swords-dance',
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/1/',
          name: 'red-blue',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/2/',
          name: 'yellow',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          name: 'tutor',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/6/',
          name: 'emerald',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          name: 'tutor',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/7/',
          name: 'firered-leafgreen',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/8/',
          name: 'diamond-pearl',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/9/',
          name: 'platinum',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/10/',
          name: 'heartgold-soulsilver',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/11/',
          name: 'black-white',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/14/',
          name: 'black-2-white-2',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/15/',
          name: 'x-y',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/16/',
          name: 'omega-ruby-alpha-sapphire',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/17/',
          name: 'sun-moon',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/18/',
          name: 'ultra-sun-ultra-moon',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/20/',
          name: 'sword-shield',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/23/',
          name: 'brilliant-diamond-and-shining-pearl',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          name: 'machine',
        },
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/25/',
          name: 'scarlet-violet',
        },
      },
    ],
  },
];

export const ENTITY_MOVES_FIXTURE: Array<Move> = RESPONSE_MOVE_FIXTURE.map(
  (item) => transformResponseMove(item),
);
