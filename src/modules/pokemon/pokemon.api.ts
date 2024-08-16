import { generateOrder, Http } from '../../services';
import { InternalServerErrorException } from '@nestjs/common';
import {
  IResponseEvolution,
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
    } catch (error) {
      throw new InternalServerErrorException(`getAll => ${error}`);
    }
  }

  async getByName(name: string) {
    try {
      const response: IResponsePokemonByName = await this.get(
        `pokemon/${name}`,
      );
      return this.generateOrderList(response);
    } catch (error) {
      throw new InternalServerErrorException(`getByName => ${error.message}`);
    }
  }

  async getSpecieByName(name: string) {
    try {
      return (await this.get(
        `pokemon-species/${name}`,
      )) as IResponsePokemonSpecie;
    } catch (error) {
      throw new InternalServerErrorException(
        `getSpecieByName => ${error.message}`,
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
        `getEvolutionsByOrder => ${error.message}`,
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
