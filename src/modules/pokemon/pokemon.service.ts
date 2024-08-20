import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PokemonApi } from './pokemon.api';
import { Pokemon } from './pokemon.entity';
import { TypeService } from './type/type.service';
import { StatService } from './stat/stat.service';
import { MoveService } from './move/move.service';
import { AbilityService } from './ability/ability.service';
import type {
  IPokemon,
  IResponseEvolution,
  IResponsePokemonByName,
  IResponsePokemonFull,
} from './pokemon.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { type IPaginate, isUUID, Service } from '@/services';
import { FilterPokemonDto } from './dto/filter-pokemon.dto';
import { IFilterParams } from '@/interfaces/filter.interface';
import { EStatus } from '@/enums/status.enum';
import { PokemonPokedexDto } from './dto/pokemon-pokedex.dto';
import { Users } from '../users/users.entity';
import { PokedexService } from './pokedex/pokedex.service';

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
    protected pokemonApi: PokemonApi,
  ) {
    super(repository, 'pokemons', [
      'moves',
      'stats',
      'types',
      'abilities',
      'evolutions',
    ]);
  }
  private _totalPokemon: number = 1302;

  async findAll(filterDto: FilterPokemonDto): Promise<any> {
    const total = await this.repository.count();

    if (total === 0 || total !== this._totalPokemon) {
      return this.generate(filterDto);
    }

    return await this.index(filterDto);
  }

  async findOne(value: string, withThrow: boolean = true): Promise<Pokemon> {
    const by = isUUID(value) ? 'id' : 'name';
    const result = await this.findBy(by, value, withThrow);

    if (!withThrow && !result) {
      return null;
    }

    if (result.status === EStatus.COMPLETE) {
      return await this.completePokemonEvolution(result);
    }

    return await this.completePokemon(result);
  }

  async addPokemon(user: Users, pokemons: PokemonPokedexDto) {
    if (user.status !== EStatus.ACTIVE) {
      throw new ForbiddenException(
        'You are not authorized to access this feature',
      );
    }
    if (!pokemons.ids && !pokemons.names) {
      throw new InternalServerErrorException(
        'You need to add one fewer Pokémon ID or name to add',
      );
    }

    const items = pokemons.ids?.length ? pokemons.ids : pokemons.names;

    const pokedex = await this.pokeDexService.findOne(user.id, false);

    if (pokedex && pokedex.pokemons) {
      const pokedexPokemonsList = this.pokeDexService.getPokedexPokemonsList(
        pokedex,
        items,
      );

      if (
        pokedexPokemonsList.pokemonsExists.length > 0 &&
        pokedexPokemonsList.pokemonsExists.length === items.length
      ) {
        return pokedex;
      }

      const listPokemons = await this.getListPokemons(
        pokedexPokemonsList.pokemonsNotExists,
      );

      return await this.pokeDexService.update(user, listPokemons);
    }

    const listPokemons = await this.getListPokemons(items);

    return await this.pokeDexService.create(user, listPokemons);
  }

  async findPokedex(user: Users) {
    if (user.status !== EStatus.ACTIVE) {
      throw new ForbiddenException(
        'You are not authorized to access this feature',
      );
    }
    return await this.pokeDexService.findOne(user.id);
  }

  private async generatePokemon(
    response: IResponsePokemonFull,
  ): Promise<IPokemon> {
    return await Promise.all([
      await this.typeService.generate(response.types),
      await this.statService.generate(response.stats),
      await this.moveService.generate(response.moves),
      await this.abilityService.generate(response.abilities),
      await this.generateEvolutions(response.evolution_chain_url),
    ])
      .then(([types, stats, moves, abilities, evolutions]) => {
        const pokemon = new Pokemon();

        if (!types) {
          throw new InternalServerErrorException('Error to get types');
        }
        pokemon.id = response.id;
        pokemon.url = response.url;
        pokemon.name = response.name;
        pokemon.image = response.image;
        pokemon.moves = moves;
        pokemon.order = response.order;
        pokemon.types = types;
        pokemon.stats = stats;
        pokemon.status = EStatus.COMPLETE;
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
        pokemon.evolution_chain_url = response.evolution_chain_url;
        pokemon.evolves_from_species = response.evolves_from_species;
        pokemon.has_gender_differences = response.has_gender_differences;
        return pokemon;
      })
      .catch((error) => {
        console.error(`# => error => ${error}`);
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
      .catch((error) => {
        console.error('# => error => ', error);
        throw new InternalServerErrorException(
          `Error to get pokemon by ${name}`,
        );
      });
  }

  private async generate(filterDto: FilterPokemonDto) {
    const response = await this.pokemonApi.getAll(0, this._totalPokemon);

    if (!response) {
      throw new InternalServerErrorException(
        'Error When Querying External Api Please Try Again Later!',
      );
    }

    try {
      const data = await Promise.all(
        response.results.map(async (item) => {
          const pokemon = new Pokemon();
          pokemon.name = item.name;
          pokemon.url = item.url;
          pokemon.order = item.order;
          pokemon.status = EStatus.INCOMPLETE;
          return this.repository.save(pokemon);
        }),
      );

      if (!data || data.length === 0) {
        return Error;
      }

      return await this.index(filterDto);
    } catch (error) {
      console.error(`# => pokemon => generate => error => ${error}`);
      throw new InternalServerErrorException(
        'Error saving generate pokemon to database',
      );
    }
  }

  private generateImage(sprites: IResponsePokemonByName['sprites']): string {
    if (!sprites) {
      return '';
    }
    const frontDefault = sprites.front_default;
    const dreamWorld = sprites.other.dream_world.front_default;
    return frontDefault || dreamWorld;
  }

  private async index(
    filterDto: FilterPokemonDto,
  ): Promise<Array<Pokemon> | IPaginate<Pokemon>> {
    if (!filterDto.limit || !filterDto.page) {
      return await this.repository.find({ order: { order: 'ASC' } });
    }
    const filters: Array<IFilterParams> = this.generateFilters(filterDto);

    if (!filterDto.asc && !filterDto.desc) {
      filterDto.asc = 'order';
    }

    return await this.paginate(filterDto, filters);
  }

  private generateFilters(filterDto: FilterPokemonDto) {
    const filters: Array<IFilterParams> = [];

    if (filterDto.status) {
      filters.push({
        param: 'status',
        condition: '=',
        value: filterDto.status.toUpperCase(),
      });
    }

    if (filterDto.name) {
      filters.push({
        param: 'name',
        condition: 'LIKE',
        value: `%${filterDto.name}%`,
      });
    }

    return filters;
  }

  private async generateEvolutions(url: string) {
    const response = await this.pokemonApi.getEvolutions(url);

    if (!response) {
      return [];
    }

    const name = response.chain.species.name;

    const evolvesToList = [
      name,
      ...this.generateNextEvolution(response.chain.evolves_to),
    ];

    const evolvesToListFiltered = evolvesToList.filter(
      (item) => item !== undefined,
    );

    if (!evolvesToListFiltered.length) {
      return [];
    }

    const listEntity = await Promise.all(
      evolvesToListFiltered.map(
        async (name) => await this.findBy('name', name),
      ),
    );

    const evolutions = listEntity.filter((item) => Boolean(item));

    if (!evolutions.length) {
      return [];
    }

    return evolutions;
  }

  private generateNextEvolution(
    evolvesTo: IResponseEvolution['chain']['evolves_to'],
  ) {
    return evolvesTo
      .map((item) =>
        [item.species.name].concat(
          ...this.generateNextEvolution(item.evolves_to),
        ),
      )
      .reduce((arr, curr) => [...arr, ...curr], []);
  }

  private async completePokemon(entity: Pokemon) {
    const responsePokemonFull = await this.generateBase(entity);

    if (!responsePokemonFull) {
      return null;
    }

    const pokemon = await this.generatePokemon(responsePokemonFull);

    if (!pokemon) {
      return null;
    }
    try {
      return await this.repository.save(pokemon);
    } catch (error) {
      console.error(`# => error => ${error}`);
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
      ...evolutions.filter((item) => item.id !== firstNotComplete.id),
      firstComplete,
    ];

    return result;
  }

  private async getListPokemons(items: Array<string>) {
    if (items.length >= 4) {
      throw new InternalServerErrorException(
        'You can only add up to 3 Pokémon at a time',
      );
    }

    const data = await Promise.all(
      items.map(async (item) => {
        const data = await this.findOne(item, false);
        if (!data) {
          const pokemon = new Pokemon();
          pokemon.id = item;
          pokemon.name = item;
          pokemon.status = EStatus.INACTIVE;
          return pokemon;
        }
        return data;
      }),
    );
    const result = data.filter((item) => item.status !== EStatus.INACTIVE);
    const pokemonsNotExists = data
      .filter((item) => item.status === EStatus.INACTIVE)
      .map((item) => item.name);
    if (!result.length) {
      throw new InternalServerErrorException(
        `Error to get list pokemons to add, this pokemons not exists => ${pokemonsNotExists} in database`,
      );
    }
    return result;
  }
}
