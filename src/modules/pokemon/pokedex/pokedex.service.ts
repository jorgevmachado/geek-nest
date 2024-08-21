import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Service, isUUID } from '@/services';
import { EStatus } from '@/enums/status.enum';

import { Pokedex } from './pokedex.entity';

import { Pokemon } from '../pokemon.entity';
import { Users } from '../../users/users.entity';

@Injectable()
export class PokedexService extends Service<Pokedex> {
  constructor(
    @InjectRepository(Pokedex)
    protected repository: Repository<Pokedex>,
  ) {
    super(repository, 'pokedex', ['pokemons']);
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
    pokedex.pokemons = pokemons.concat(pokedex.pokemons);
    try {
      return await this.repository.save(pokedex);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error updating pokedex to database',
      );
    }
  }

  getPokedexPokemonsList(pokedex: Pokedex, items: Array<string>) {
    const isListUuid = items.every((item) => isUUID(item));
    const pokemons = pokedex.pokemons.map((item) =>
      !isListUuid ? item.name : item.id,
    );

    const pokemonsExists = pokemons.filter((item) => items.includes(item));
    const pokemonsNotExists = items.filter((item) => !pokemons.includes(item));
    return {
      items,
      pokemonsExists,
      pokemonsNotExists,
    };
  }
}
