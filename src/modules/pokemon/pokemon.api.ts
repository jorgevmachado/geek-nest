import { Http, generateOrder } from '@/services';
import { InternalServerErrorException } from '@nestjs/common';

import type {
  IResponseEvolution,
  IResponseMove,
  IResponsePaginate,
  IResponsePokemon,
  IResponsePokemonByName,
  IResponsePokemonSpecie,
} from './pokemon.interface';

export class PokemonApi extends Http {
  constructor() {
    super('https://pokeapi.co/api/v2', {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getAll(offset: number, limit: number) {
    try {
      const response: IResponsePaginate<IResponsePokemon> = await this.get(
        `/pokemon?offset=${offset}&limit=${limit}`,
      );
      return {
        ...response,
        results: response.results.map((item) => ({
          ...item,
          order: generateOrder(item.url, `${this.url}/pokemon/`),
        })),
      };
    } catch (_) {
      throw new InternalServerErrorException(
        'Error When Querying External Api getAll Please Try Again Later!',
      );
    }
  }

  async getByName(name: string) {
    try {
      const response: IResponsePokemonByName = await this.get(
        `pokemonx/${name}`,
      );
      return this.generateOrderList(response);
    } catch (_) {
      throw new InternalServerErrorException(
        'Error When Querying External Api getName Please Try Again Later!',
      );
    }
  }

  async getSpecieByName(name: string) {
    try {
      return (await this.get(
        `pokemon-species/${name}`,
      )) as IResponsePokemonSpecie;
    } catch (_) {
      throw new InternalServerErrorException(
        'Error When Querying External Api getSpecieByName Please Try Again Later!',
      );
    }
  }

  async getEvolutions(url: string) {
    const order = Number(
      url.replace(`${this.url}/evolution-chain/`, '').replace('/', ''),
    );
    try {
      return (await this.get(`evolution-chain/${order}`)) as IResponseEvolution;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error When Querying External Api getEvolutions Please Try Again Later!',
      );
    }
  }

  async getMove(url: string) {
    const order = Number(url.replace(`${this.url}/move/`, '').replace('/', ''));
    try {
      const response = (await this.get(`move/${order}`)) as IResponseMove;
      if (
        !response.effect_entries.length ||
        response.effect_entries.length <= 0
      ) {
        response.effect_entries = [
          {
            effect: 'inflicts regular damage.',
            language: {
              name: 'en',
              url: 'https://pokeapi.co/api/v2/language/9/',
            },
            short_effect: 'inflicts regular damage with additional effects.',
          },
        ];
      }

      return response;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error When Querying External Api getMove Please Try Again Later!',
      );
    }
  }

  private generateOrderList(response: IResponsePokemonByName) {
    response.types = response.types.map((item) => ({
      ...item,
      order: generateOrder(item.type.url, `${this.url}/type/`),
    }));

    response.moves = response.moves.map((item) => ({
      ...item,
      order: generateOrder(item.move.url, `${this.url}/move/`),
    }));

    response.stats = response.stats.map((item) => ({
      ...item,
      order: generateOrder(item.stat.url, `${this.url}/stat/`),
    }));

    response.abilities = response.abilities.map((item) => ({
      ...item,
      order: generateOrder(item.ability.url, `${this.url}/ability/`),
    }));

    return response;
  }
}
