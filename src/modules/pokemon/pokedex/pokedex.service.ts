import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { EStatus } from '@/enums/status.enum';

import { Service } from '@/services';

import { Pokedex } from './pokedex.entity';

import { Pokemon } from '../pokemon.entity';
import { Users } from '@/modules/auth/users/users.entity';

@Injectable()
export class PokedexService extends Service<Pokedex> {
  constructor(
    @InjectRepository(Pokedex)
    protected repository: Repository<Pokedex>,
  ) {
    super(repository, 'pokedex', ['pokemons']);
  }

  async addInPokeDex(user: Users, pokemons: Array<Pokemon>) {
    const pokedex = await this.findOne(user.id, false);
    if (!pokedex) {
      return await this.create(user, pokemons);
    }

    const { pokemonsExists, pokemonsNotExists } = this.pokemonList(
      pokedex,
      pokemons.map((item) => item.id),
    );

    if (
      pokemonsExists.length > 0 &&
      pokemonsExists.length === pokemons.length
    ) {
      return pokedex;
    }

    const newPokemons = pokemons.filter((item) =>
      pokemonsNotExists.includes(item.id),
    );

    return await this.update(user, newPokemons, pokedex);
  }

  async findOne(accountId: string, withThrow: boolean = true) {
    return this.findBy({
      by: 'accountId',
      value: accountId,
      withThrow,
    });
  }

  async create(account: Users, pokemons: Array<Pokemon>) {
    const pokeDex = new Pokedex();
    pokeDex.account = account;
    pokeDex.pokemons = pokemons;
    pokeDex.status = EStatus.ACTIVE;
    try {
      return await this.repository.save(pokeDex);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error saving pokedex to database',
      );
    }
  }

  async update(account: Users, pokemons: Array<Pokemon>, pokedex?: Pokedex) {
    if (!pokedex) {
      pokedex = await this.findOne(account.id);
    }

    pokedex.pokemons = pokedex.pokemons.concat(pokemons);

    try {
      return await this.repository.save(pokedex);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error updating pokedex to database',
      );
    }
  }

  private pokemonList(pokedex: Pokedex, items: Array<string>) {
    const pokemons = pokedex.pokemons.map((item) => item.id);
    const pokemonsExists = pokemons.filter((item) => items.includes(item));
    const pokemonsNotExists = items.filter((item) => !pokemons.includes(item));
    return {
      items,
      pokemonsExists,
      pokemonsNotExists,
    };
  }
}
