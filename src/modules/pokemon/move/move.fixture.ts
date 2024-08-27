import { Move } from './move.entity';

import {
  RESPONSE_MOVE_FIXTURE_BIND,
  RESPONSE_MOVE_FIXTURE_CUT,
  RESPONSE_MOVE_FIXTURE_RAZOR_WIND,
  RESPONSE_MOVE_FIXTURE_SWORDS_DANCE,
} from '@/modules/pokemon/fixtures/response/by-name/pokemon.response.pokemon-by-name-moves.fixture';

const ENTITY_MOVE_FIXTURE_RAZOR_WIND: Move = {
  id: 'bbdc2bf6-ccda-47bc-8ce4-142f187bcece',
  url: RESPONSE_MOVE_FIXTURE_RAZOR_WIND.move.url,
  order: RESPONSE_MOVE_FIXTURE_RAZOR_WIND.order,
  name: RESPONSE_MOVE_FIXTURE_RAZOR_WIND.move.name,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

const ENTITY_MOVE_FIXTURE_SWORDS_DANCE: Move = {
  id: 'ccd54ec0-7e63-4ae6-b464-84cd5b5d8f86',
  url: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE.move.url,
  order: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE.order,
  name: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE.move.name,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

const ENTITY_MOVE_FIXTURE_CUT: Move = {
  id: '302bfcf3-9474-4681-8ca5-ef7dc4019161',
  url: RESPONSE_MOVE_FIXTURE_CUT.move.url,
  order: RESPONSE_MOVE_FIXTURE_CUT.order,
  name: RESPONSE_MOVE_FIXTURE_CUT.move.name,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

const ENTITY_MOVE_FIXTURE_BIND: Move = {
  id: '2b513fda-4d88-4b61-bdbf-bd35e9f4c0b9',
  url: RESPONSE_MOVE_FIXTURE_BIND.move.url,
  order: RESPONSE_MOVE_FIXTURE_BIND.order,
  name: RESPONSE_MOVE_FIXTURE_BIND.move.name,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

export const ENTITIES_MOVES_FIXTURE_BULBASAUR: Array<Move> = [
  ENTITY_MOVE_FIXTURE_RAZOR_WIND,
  ENTITY_MOVE_FIXTURE_SWORDS_DANCE,
  ENTITY_MOVE_FIXTURE_CUT,
];

export const ENTITIES_MOVES_FIXTURE_IVYSAUR: Array<Move> = [
  ENTITY_MOVE_FIXTURE_SWORDS_DANCE,
  ENTITY_MOVE_FIXTURE_CUT,
  ENTITY_MOVE_FIXTURE_BIND,
];

export const ENTITIES_MOVES_FIXTURE_VENUSAUR: Array<Move> = [
  ENTITY_MOVE_FIXTURE_SWORDS_DANCE,
  ENTITY_MOVE_FIXTURE_CUT,
  ENTITY_MOVE_FIXTURE_BIND,
];
