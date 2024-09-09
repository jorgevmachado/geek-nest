import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';

import { Service } from '@/services';

import type { IResponsePokemonByName } from '../pokemon.interface';
import { Move } from './move.entity';
import { PokemonApi } from '@/modules/pokemon/pokemon.api';

@Injectable()
export class MoveService extends Service<Move> {
  constructor(
    @InjectRepository(Move)
    protected repository: Repository<Move>,
    protected pokemonApi: PokemonApi,
  ) {
    super(repository, 'moves', []);
  }
  async generate(moves: IResponsePokemonByName['moves']): Promise<Array<Move>> {
    const result = await Promise.all(
      moves.map(async (move) => {
        const entity = await this.repository.findOne({
          where: { order: move.order },
        });
        if (!entity) {
          return await this.generateMove(move);
        }
        return entity;
      }),
    );
    return result.filter((move) => move !== null);
  }

  cleanMoves(moves: Array<Move>) {
    if (moves.length === 0) {
      return moves;
    }
    return moves.map((move) => {
      const learned_by_pokemon = JSON.parse(
        move.learned_by_pokemon,
      ) as Array<string>;
      move.pokemons = learned_by_pokemon.map((pokemon) => pokemon);
      delete move.learned_by_pokemon;
      return move;
    });
  }

  private async generateMove(
    move: IResponsePokemonByName['moves'][number],
  ): Promise<Move> {
    const response = await this.pokemonApi.getMove(move.move.url);

    if (!response) {
      return null;
    }

    const entity = new Move();
    entity.pp = response.pp;
    entity.url = move.move.url;
    entity.type = response.type.name;
    entity.name = move.move.name;
    entity.order = move.order;
    entity.power = response.power;
    entity.target = response.target.name;
    entity.effect = response.effect_entries[0].effect;
    entity.priority = response.priority;
    entity.accuracy = response.accuracy;
    entity.short_effect = response.effect_entries[0].short_effect;
    entity.damage_class = response.damage_class.name;
    entity.effect_chance = response.effect_chance;
    entity.learned_by_pokemon = JSON.stringify(
      response.learned_by_pokemon.map((pokemon) => pokemon.name),
    );
    entity.pokemons = response.learned_by_pokemon.map(
      (pokemon) => pokemon.name,
    );
    return await this.repository.save(entity);
  }
}
