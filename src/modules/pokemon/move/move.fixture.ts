import { Move } from './move.entity';

import {
  RESPONSE_MOVE_FIXTURE_BIND,
  RESPONSE_MOVE_FIXTURE_CUT,
  RESPONSE_MOVE_FIXTURE_RAZOR_WIND,
  RESPONSE_MOVE_FIXTURE_SWORDS_DANCE,
} from '@/modules/pokemon/fixtures/response/by-name/pokemon.response.pokemon-by-name-moves.fixture';
import {
  RESPONSE_MOVE_FIXTURE_BIND_ITEM,
  RESPONSE_MOVE_FIXTURE_CUT_ITEM,
  RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM,
  RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM,
} from '@/modules/pokemon/fixtures';

const ENTITY_MOVE_FIXTURE_RAZOR_WIND: Move = {
  id: 'bbdc2bf6-ccda-47bc-8ce4-142f187bcece',
  pp: RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.pp,
  url: RESPONSE_MOVE_FIXTURE_RAZOR_WIND.move.url,
  type: RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.type.name,
  name: RESPONSE_MOVE_FIXTURE_RAZOR_WIND.move.name,
  order: RESPONSE_MOVE_FIXTURE_RAZOR_WIND.order,
  power: RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.power,
  target: RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.target.name,
  effect: RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.effect_entries[0].effect,
  priority: RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.priority,
  accuracy: RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.accuracy,
  short_effect:
    RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.effect_entries[0].short_effect,
  damage_class: RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.damage_class.name,
  effect_chance: RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.effect_chance,
  learned_by_pokemon: JSON.stringify(
    RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.learned_by_pokemon.map(
      (pokemon) => pokemon.name,
    ),
  ),
  pokemons: RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM.learned_by_pokemon.map(
    (pokemon) => pokemon.name,
  ),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

const ENTITY_MOVE_FIXTURE_SWORDS_DANCE: Move = {
  id: 'ccd54ec0-7e63-4ae6-b464-84cd5b5d8f86',
  pp: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.pp,
  url: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE.move.url,
  type: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.type.name,
  name: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE.move.name,
  order: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE.order,
  power: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.power,
  target: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.target.name,
  effect: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.effect_entries[0].effect,
  priority: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.priority,
  accuracy: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.accuracy,
  short_effect:
    RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.effect_entries[0].short_effect,
  damage_class: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.damage_class.name,
  effect_chance: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.effect_chance,
  learned_by_pokemon: JSON.stringify(
    RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.learned_by_pokemon.map(
      (pokemon) => pokemon.name,
    ),
  ),
  pokemons: RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM.learned_by_pokemon.map(
    (pokemon) => pokemon.name,
  ),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

const ENTITY_MOVE_FIXTURE_CUT: Move = {
  id: '302bfcf3-9474-4681-8ca5-ef7dc4019161',
  pp: RESPONSE_MOVE_FIXTURE_CUT_ITEM.pp,
  url: RESPONSE_MOVE_FIXTURE_CUT.move.url,
  type: RESPONSE_MOVE_FIXTURE_CUT_ITEM.type.name,
  name: RESPONSE_MOVE_FIXTURE_CUT.move.name,
  order: RESPONSE_MOVE_FIXTURE_CUT.order,
  power: RESPONSE_MOVE_FIXTURE_CUT_ITEM.power,
  target: RESPONSE_MOVE_FIXTURE_CUT_ITEM.target.name,
  effect: RESPONSE_MOVE_FIXTURE_CUT_ITEM.effect_entries[0].effect,
  priority: RESPONSE_MOVE_FIXTURE_CUT_ITEM.priority,
  accuracy: RESPONSE_MOVE_FIXTURE_CUT_ITEM.accuracy,
  short_effect: RESPONSE_MOVE_FIXTURE_CUT_ITEM.effect_entries[0].short_effect,
  damage_class: RESPONSE_MOVE_FIXTURE_CUT_ITEM.damage_class.name,
  effect_chance: RESPONSE_MOVE_FIXTURE_CUT_ITEM.effect_chance,
  learned_by_pokemon: JSON.stringify(
    RESPONSE_MOVE_FIXTURE_CUT_ITEM.learned_by_pokemon.map(
      (pokemon) => pokemon.name,
    ),
  ),
  pokemons: RESPONSE_MOVE_FIXTURE_CUT_ITEM.learned_by_pokemon.map(
    (pokemon) => pokemon.name,
  ),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

const ENTITY_MOVE_FIXTURE_BIND: Move = {
  id: '2b513fda-4d88-4b61-bdbf-bd35e9f4c0b9',
  pp: RESPONSE_MOVE_FIXTURE_BIND_ITEM.pp,
  url: RESPONSE_MOVE_FIXTURE_BIND.move.url,
  type: RESPONSE_MOVE_FIXTURE_BIND_ITEM.type.name,
  name: RESPONSE_MOVE_FIXTURE_BIND.move.name,
  order: RESPONSE_MOVE_FIXTURE_BIND.order,
  power: RESPONSE_MOVE_FIXTURE_BIND_ITEM.power,
  target: RESPONSE_MOVE_FIXTURE_BIND_ITEM.target.name,
  effect: RESPONSE_MOVE_FIXTURE_BIND_ITEM.effect_entries[0].effect,
  priority: RESPONSE_MOVE_FIXTURE_BIND_ITEM.priority,
  accuracy: RESPONSE_MOVE_FIXTURE_BIND_ITEM.accuracy,
  short_effect: RESPONSE_MOVE_FIXTURE_BIND_ITEM.effect_entries[0].short_effect,
  damage_class: RESPONSE_MOVE_FIXTURE_BIND_ITEM.damage_class.name,
  effect_chance: RESPONSE_MOVE_FIXTURE_BIND_ITEM.effect_chance,
  learned_by_pokemon: JSON.stringify(
    RESPONSE_MOVE_FIXTURE_BIND_ITEM.learned_by_pokemon.map(
      (pokemon) => pokemon.name,
    ),
  ),
  pokemons: RESPONSE_MOVE_FIXTURE_BIND_ITEM.learned_by_pokemon.map(
    (pokemon) => pokemon.name,
  ),
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
