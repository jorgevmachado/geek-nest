import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { isArray } from 'class-validator';

import { type IPaginate, Service, isUUID } from '@/services';

import { EStatus } from '@/enums/status.enum';
import { QueryParametersDto } from '@/dto/query-parameters.dto';

import { Users } from '@/modules/auth/users/users.entity';

import type {
  IResponsePokemonByName,
  IResponsePokemonFull,
} from './pokemon.interface';
import { Pokemon } from './pokemon.entity';
import { PokemonApi } from './pokemon.api';

import { AbilityService } from './ability/ability.service';
import { EvolutionsService } from './evolutions/evolutions.service';
import { MoveService } from './move/move.service';
import { PokedexService } from './pokedex/pokedex.service';
import { StatService } from './stat/stat.service';
import { TypeService } from './type/type.service';

import { PokemonPokedexDto } from './dto/pokemon-pokedex.dto';

@Injectable()
export class PokemonService extends Service<Pokemon> {
  constructor(
    @InjectRepository(Pokemon)
    protected repository: Repository<Pokemon>,
    protected typeService: TypeService,
    protected statService: StatService,
    protected moveService: MoveService,
    protected abilityService: AbilityService,
    protected pokeDexService: PokedexService,
    protected evolutionService: EvolutionsService,
    protected pokemonApi: PokemonApi,
  ) {
    super(repository, 'pokemons', [
      'moves',
      'types',
      'abilities',
      'evolutions',
    ]);
  }
  private _totalPokemon: number = 1302;

  async findAll(
    parameters: QueryParametersDto,
  ): Promise<Array<Pokemon> | IPaginate<Pokemon>> {
    const total = await this.repository.count();

    if (total === 0 || total !== this._totalPokemon) {
      return this.cleanEntities(await this.generate(total, parameters));
    }

    return this.cleanEntities(await this.index({ parameters }));
  }

  async findOne(
    value: string,
    withThrow: boolean = true,
    complete: boolean = true,
  ): Promise<Pokemon> {
    const result = await this.findBy({
      by: isUUID(value) ? 'id' : 'name',
      value,
      withThrow,
    });

    if (!complete) {
      return this.cleanEntity(result);
    }

    if (result.status === EStatus.COMPLETE) {
      return this.cleanEntity(await this.completePokemonEvolution(result));
    }

    return this.cleanEntity(await this.completePokemon(result));
  }

  async addPokemonToPokedex(user: Users, pokemons: PokemonPokedexDto) {
    const items = pokemons.ids?.length ? pokemons.ids : pokemons.names;

    if (!pokemons.ids && !pokemons.names) {
      throw new BadRequestException(
        'You need to add one fewer Pokémon ID or name to add',
      );
    }

    if (items.length >= 4) {
      throw new BadRequestException(
        'You can only add up to 3 Pokémon at a time',
      );
    }

    const pokemonList = await Promise.all(
      items.map(async (item) => await this.findOne(item, false)),
    ).then((data) => data.filter((item) => item));

    return await this.pokeDexService.addInPokeDex(user, pokemonList);
  }

  async findPokedex(user: Users) {
    return await this.pokeDexService.findOne(user.id);
  }

  private async generate(total: number, filterDto: QueryParametersDto) {
    const response = await this.pokemonApi.getAll(0, this._totalPokemon);

    if (!response) {
      throw new InternalServerErrorException(
        'Error When Querying External Api Please Try Again Later!',
      );
    }

    const entities = total !== 0 ? await this.repository.find() : [];

    const results = response.results.filter(
      (item) => !entities.find((entity) => entity.name === item.name),
    );

    return await Promise.all(
      results.map(async (item) => {
        const pokemon = new Pokemon();
        pokemon.name = item.name;
        pokemon.url = item.url;
        pokemon.order = item.order;
        pokemon.status = EStatus.INCOMPLETE;
        return this.repository.save(pokemon);
      }),
    )
      .then(async (data) => {
        const resultData = data.filter((item) => Boolean(item));

        if (!resultData || resultData.length === 0) {
          throw new InternalServerErrorException(
            'Error to save pokemons in database',
          );
        }

        return await this.index({ parameters: filterDto });
      })
      .catch(() => {
        throw new InternalServerErrorException(
          'Error saving generate pokemon to database',
        );
      });
  }

  private async generatePokemon(
    response: IResponsePokemonFull,
  ): Promise<Pokemon> {
    return await Promise.all([
      await this.typeService.generate(response.types),
      this.statService.generate(response.stats),
      await this.moveService.generate(response.moves),
      await this.abilityService.generate(response.abilities),
      await this.evolutionService.generate(response.evolution_chain_url),
    ])
      .then(([types, stats, moves, abilities, evolutions]) => {
        const pokemon = new Pokemon();
        pokemon.id = response.id;
        pokemon.hp = stats.hp;
        pokemon.url = response.url;
        pokemon.name = response.name;
        pokemon.image = response.image;
        pokemon.speed = stats.speed;
        pokemon.moves = moves;
        pokemon.order = response.order;
        pokemon.types = types;
        pokemon.status = EStatus.COMPLETE;
        pokemon.attack = stats.attack;
        pokemon.defense = stats.defense;
        pokemon.habitat = response.habitat;
        pokemon.is_baby = response.is_baby;
        pokemon.shape_url = response.shape_url;
        pokemon.abilities = abilities;
        pokemon.evolutions = evolutions;
        pokemon.shape_name = response.shape_name;
        pokemon.is_mythical = response.is_mythical;
        pokemon.gender_rate = response.gender_rate;
        pokemon.is_legendary = response.is_legendary;
        pokemon.capture_rate = response.capture_rate;
        pokemon.hatch_counter = response.hatch_counter;
        pokemon.base_happiness = response.base_happiness;
        pokemon.special_attack = stats.special_attack;
        pokemon.special_defense = stats.special_defense;
        pokemon.evolution_chain_url = response.evolution_chain_url;
        pokemon.evolves_from_species = response.evolves_from_species;
        pokemon.has_gender_differences = response.has_gender_differences;
        return pokemon;
      })
      .catch(() => {
        throw new InternalServerErrorException(
          `Error to get pokemon by ${response.name}`,
        );
      });
  }

  private async generateBase(
    data: Pokemon,
  ): Promise<IResponsePokemonFull | void> {
    const name = data.name;
    return await Promise.all([
      await this.pokemonApi.getByName(name),
      await this.pokemonApi.getSpecieByName(name),
    ])
      .then(([response, responseSpecie]) => ({
        id: data.id,
        url: data.url,
        name,
        order: data.order,
        types: response.types,
        stats: response.stats,
        moves: response.moves,
        image: this.generateImage(response.sprites),
        habitat: responseSpecie.habitat ? responseSpecie.habitat.name : null,
        is_baby: responseSpecie.is_baby,
        shape_url: responseSpecie.shape.url,
        abilities: response.abilities,
        shape_name: responseSpecie.shape.name,
        is_mythical: responseSpecie.is_mythical,
        gender_rate: responseSpecie.gender_rate,
        is_legendary: responseSpecie.is_legendary,
        capture_rate: responseSpecie.capture_rate,
        hatch_counter: responseSpecie.hatch_counter,
        base_happiness: responseSpecie.base_happiness,
        evolution_chain_url: responseSpecie.evolution_chain.url,
        evolves_from_species: responseSpecie.evolves_from_species
          ? responseSpecie.evolves_from_species.name
          : null,
        has_gender_differences: responseSpecie.has_gender_differences,
      }))
      .catch(() => {
        throw new InternalServerErrorException(
          `Error to get pokemon by ${name}`,
        );
      });
  }

  private generateImage(sprites: IResponsePokemonByName['sprites']): string {
    if (!sprites) {
      return '';
    }
    const frontDefault = sprites.front_default;
    const dreamWorld = sprites.other.dream_world.front_default;
    return frontDefault || dreamWorld;
  }

  private async completePokemon(entity: Pokemon) {
    const responsePokemonFull = await this.generateBase(entity);

    if (!responsePokemonFull) {
      return null;
    }

    const pokemon = await this.generatePokemon(responsePokemonFull);

    pokemon.evolutions = await Promise.all(
      pokemon.evolutions.map((item) => this.findOne(item.name, false, false)),
    );

    if (!pokemon) {
      return null;
    }

    try {
      return await this.repository.save(pokemon);
    } catch (_) {
      throw new InternalServerErrorException(
        `Error to complete pokemon by ${entity.name}`,
      );
    }
  }

  private async completePokemonEvolution(result: Pokemon) {
    const evolutions = result.evolutions;

    const firstNotComplete = evolutions
      .sort((a, b) => a.order - b.order)
      .find((item) => item.status !== EStatus.COMPLETE);

    if (!firstNotComplete) {
      return result;
    }

    const firstComplete = await this.completePokemon(firstNotComplete);

    if (!firstComplete) {
      return result;
    }

    result.evolutions = [
      ...evolutions.filter((item) => item.name !== firstComplete.name),
      firstComplete,
    ].sort((a, b) => a.order - b.order);

    return result;
  }

  private cleanEntity(entity: Pokemon) {
    const moves = Boolean(entity.moves.length)
      ? this.moveService.cleanMoves(entity.moves)
      : entity.moves;
    return {
      ...entity,
      moves,
    };
  }

  private cleanEntities(entities: Array<Pokemon> | IPaginate<Pokemon>) {
    if (isArray(entities)) {
      return entities.map((entity) => this.cleanEntity(entity));
    }
    return {
      ...entities,
      data: entities.data.map((entity) => this.cleanEntity(entity)),
    };
  }
}
