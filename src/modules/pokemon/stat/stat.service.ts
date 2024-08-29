import { Injectable } from '@nestjs/common';

import type { IResponsePokemonByName } from '../pokemon.interface';
import type { IStat } from '@/modules/pokemon/stat/stat.interface';

@Injectable()
export class StatService {
  generate(responseStats: IResponsePokemonByName['stats']): IStat {
    return responseStats.reduce(
      (acc, responseStat) => {
        switch (responseStat.stat.name) {
          case 'hp':
            acc.hp = responseStat.base_stat;
            break;
          case 'speed':
            acc.speed = responseStat.base_stat;
            break;
          case 'attack':
            acc.attack = responseStat.base_stat;
            break;
          case 'defense':
            acc.defense = responseStat.base_stat;
            break;
          case 'special-attack':
            acc.special_attack = responseStat.base_stat;
            break;
          case 'special-defense':
            acc.special_defense = responseStat.base_stat;
            break;
          default:
        }
        return acc;
      },
      {
        hp: 0,
        speed: 0,
        attack: 0,
        defense: 0,
        special_attack: 0,
        special_defense: 0,
      },
    );
  }
}
