import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PokemonApi } from './pokemon.api';
import { Pokemon } from './pokemon.entity';
import { TypeService } from './type/type.service';
import { StatService } from './stat/stat.service';
import { MoveService } from './move/move.service';
import { AbilityService } from './ability/ability.service';
import {
  EStatus,
  IResponsePokemonByName,
  IResponsePokemonFull,
} from './pokemon.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginate, Service } from '../../services';
import { FilterPokemonDto } from './dto/filter-pokemon.dto';
import { IFilterParams } from '../../interfaces/filter.interface';

@Injectable()
export class PokemonService extends Service<Pokemon> {
  constructor(
    @InjectRepository(Pokemon)
    protected repository: Repository<Pokemon>,
    protected typeService: TypeService,
    protected statService: StatService,
    protected moveService: MoveService,
    protected abilityService: AbilityService,
    protected pokemonApi: PokemonApi,
  ) {
    super(repository, 'pokemons', ['moves', 'stats', 'types', 'abilities']);
  }
  private _totalPokemon: number = 1302;

  async findAll(filterDto: FilterPokemonDto): Promise<any> {
    const total = await this.repository.count();

    if (total === 0 || total !== this._totalPokemon) {
      return this.generate(filterDto);
    }

    return await this.index(filterDto);
  }

  async findOne(name: string): Promise<any> {
    const result = await this.findBy('name', name, true);

    if (result.status === EStatus.COMPLETE) {
      return result;
    }

    const responsePokemonFull = await this.generateBase(result);

    if (!responsePokemonFull) {
      return null;
    }

    const pokemon = await Promise.all([
      await this.typeService.generate(responsePokemonFull.types),
      await this.statService.generate(responsePokemonFull.stats),
      await this.moveService.generate(responsePokemonFull.moves),
      await this.abilityService.generate(responsePokemonFull.abilities),
    ])
      .then(([types, stats, moves, abilities]) => {
        const pokemon = new Pokemon();
        pokemon.id = responsePokemonFull.id;
        pokemon.url = responsePokemonFull.url;
        pokemon.name = responsePokemonFull.name;
        pokemon.image = responsePokemonFull.image;
        pokemon.moves = moves;
        pokemon.order = responsePokemonFull.order;
        pokemon.types = types;
        pokemon.stats = stats;
        pokemon.status = EStatus.COMPLETE;
        pokemon.habitat = responsePokemonFull.habitat;
        pokemon.is_baby = responsePokemonFull.is_baby;
        pokemon.shape_url = responsePokemonFull.shape_url;
        pokemon.abilities = abilities;
        pokemon.shape_name = responsePokemonFull.shape_name;
        pokemon.is_mythical = responsePokemonFull.is_mythical;
        pokemon.gender_rate = responsePokemonFull.gender_rate;
        pokemon.is_legendary = responsePokemonFull.is_legendary;
        pokemon.capture_rate = responsePokemonFull.capture_rate;
        pokemon.hatch_counter = responsePokemonFull.hatch_counter;
        pokemon.base_happiness = responsePokemonFull.base_happiness;
        pokemon.evolution_chain_url = responsePokemonFull.evolution_chain_url;
        pokemon.evolves_from_species = responsePokemonFull.evolves_from_species;
        pokemon.has_gender_differences =
          responsePokemonFull.has_gender_differences;
        return pokemon;
      })
      .catch((error) => {
        console.error(`# => error => ${error}`);
        throw new InternalServerErrorException(
          `Error to get pokemon by ${name}`,
        );
      });

    if (!pokemon) {
      return null;
    }
    try {
      return await this.repository.save(pokemon);
    } catch (error) {
      console.error(`# => error => ${error}`);
      throw new InternalServerErrorException(`Error to get pokemon by ${name}`);
    }
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

  private async findBy(by: 'id' | 'name', value: string, withThrow?: boolean) {
    const result = await this.repository.findOne({
      where: { [by]: value },
      relations: this.relations,
    });

    if (!result) {
      if (!withThrow) {
        return null;
      }

      throw new NotFoundException('Pokemon not found');
    }

    return result;
  }
}
