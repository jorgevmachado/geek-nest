import type { IResponsePokemonByName } from '@/modules/pokemon/pokemon.interface';

const RESPONSE_MOVE_FIXTURE_VERSION_GROUP_RED_BLUE: IResponsePokemonByName['moves'][number]['version_group_details'][number] =
  {
    version_group: {
      url: 'https://pokeapi.co/api/v2/version-group/1/',
      name: 'red-blue',
    },
    level_learned_at: 0,
    move_learn_method: {
      url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
      name: 'machine',
    },
  };

const RESPONSE_MOVE_FIXTURE_VERSION_GROUP_YELLOW: IResponsePokemonByName['moves'][number]['version_group_details'][number] =
  {
    version_group: {
      url: 'https://pokeapi.co/api/v2/version-group/2/',
      name: 'yellow',
    },
    level_learned_at: 0,
    move_learn_method: {
      url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
      name: 'machine',
    },
  };

export const RESPONSE_MOVE_FIXTURE_RAZOR_WIND: IResponsePokemonByName['moves'][number] =
  {
    order: 13,
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
  };

export const RESPONSE_MOVE_FIXTURE_SWORDS_DANCE: IResponsePokemonByName['moves'][number] =
  {
    order: 14,
    move: {
      url: 'https://pokeapi.co/api/v2/move/14/',
      name: 'swords-dance',
    },
    version_group_details: [
      RESPONSE_MOVE_FIXTURE_VERSION_GROUP_RED_BLUE,
      RESPONSE_MOVE_FIXTURE_VERSION_GROUP_YELLOW,
      {
        version_group: {
          url: 'https://pokeapi.co/api/v2/version-group/6/',
          name: 'emerald',
        },
        level_learned_at: 0,
        move_learn_method: {
          url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          name: 'tutor',
        },
      },
    ],
  };

export const RESPONSE_MOVE_FIXTURE_CUT: IResponsePokemonByName['moves'][number] =
  {
    order: 15,
    move: {
      name: 'cut',
      url: 'https://pokeapi.co/api/v2/move/15/',
    },
    version_group_details: [
      RESPONSE_MOVE_FIXTURE_VERSION_GROUP_RED_BLUE,
      RESPONSE_MOVE_FIXTURE_VERSION_GROUP_YELLOW,
    ],
  };

export const RESPONSE_MOVE_FIXTURE_BIND: IResponsePokemonByName['moves'][number] =
  {
    order: 20,
    move: {
      name: 'bind',
      url: 'https://pokeapi.co/api/v2/move/20/',
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: 'tutor',
          url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
        },
        version_group: {
          name: 'black-2-white-2',
          url: 'https://pokeapi.co/api/v2/version-group/14/',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: 'tutor',
          url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
        },
        version_group: {
          name: 'omega-ruby-alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version-group/16/',
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: 'tutor',
          url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
        },
        version_group: {
          name: 'ultra-sun-ultra-moon',
          url: 'https://pokeapi.co/api/v2/version-group/18/',
        },
      },
    ],
  };

export const RESPONSE_MOVES_FIXTURE_BULBASAUR: IResponsePokemonByName['moves'] =
  [
    RESPONSE_MOVE_FIXTURE_RAZOR_WIND,
    RESPONSE_MOVE_FIXTURE_SWORDS_DANCE,
    RESPONSE_MOVE_FIXTURE_CUT,
  ];

export const RESPONSE_MOVES_FIXTURE_IVYSAUR: IResponsePokemonByName['moves'] = [
  RESPONSE_MOVE_FIXTURE_SWORDS_DANCE,
  RESPONSE_MOVE_FIXTURE_CUT,
  RESPONSE_MOVE_FIXTURE_BIND,
];

export const RESPONSE_MOVES_FIXTURE_VENUSAUR: IResponsePokemonByName['moves'] =
  [
    RESPONSE_MOVE_FIXTURE_SWORDS_DANCE,
    RESPONSE_MOVE_FIXTURE_CUT,
    RESPONSE_MOVE_FIXTURE_BIND,
  ];
