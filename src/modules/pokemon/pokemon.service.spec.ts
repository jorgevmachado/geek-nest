import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { isArray } from 'class-validator';

import { Ability } from './ability/ability.entity';
import { Move } from './move/move.entity';
import { Pokedex } from './pokedex/pokedex.entity';
import { Pokemon } from './pokemon.entity';
import { Type } from './type/type.entity';

import { PokemonApi } from './pokemon.api';

import { AbilityService } from './ability/ability.service';
import { EvolutionsService } from '@/modules/pokemon/evolutions/evolutions.service';
import { MoveService } from './move/move.service';
import { PokedexService } from './pokedex/pokedex.service';
import { PokemonService } from './pokemon.service';
import { StatService } from './stat/stat.service';
import { TypeService } from './type/type.service';

import {
  ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
  ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
  ENTITY_POKEMON_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_FIXTURE_IVYSAUR,
  ENTITY_POKEMON_FIXTURE_VENUSAUR,
} from '@/modules/pokemon/pokemon.fixture';
import {
  RESPONSE_POKEMON_BASE_FIXTURE_LIST,
  TResponse,
  TResponseResolve,
  TService,
  TServiceResolve,
  generateEntities,
  generateResponse,
} from '@/modules/pokemon/fixtures';
import { POKEDEX_FIXTURE_ACTIVE } from '@/modules/pokemon/pokedex/pokedex.fixture';

import { EStatus } from '@/enums/status.enum';
import { PAGINATE } from '@/fixtures';
import { USER_COMPLETE_FIXTURE } from '@/modules/auth/users/users.fixture';

describe('PokemonService', () => {
  let service: PokemonService;
  let repository: Repository<Pokemon>;
  let pokemonApi: PokemonApi;
  let typeService: TypeService;
  let statService: StatService;
  let moveService: MoveService;
  let abilityService: AbilityService;
  let pokeDexService: PokedexService;
  let evolutionService: EvolutionsService;

  const generateResponseApi = (
    order: number = 0,
    responses: Array<TResponse>,
    resolve?: TResponseResolve,
  ) => {
    responses.forEach((item) => {
      const response = generateResponse(order, item, resolve);

      if (!response) {
        return;
      }

      jest.spyOn(pokemonApi, item).mockResolvedValueOnce(response);
    });
  };

  const generateDependencies = (
    entities: Array<{
      order?: number;
      type: TService;
      service:
        | TypeService
        | StatService
        | MoveService
        | AbilityService
        | EvolutionsService;
      resolve?: TServiceResolve;
    }>,
  ) => {
    entities.forEach((entity) => {
      const result = generateEntities(
        entity.type,
        entity.order,
        entity.resolve,
      );
      jest
        .spyOn(entity.service, 'generate')
        .mockResolvedValueOnce(result as any);
    });
  };

  const generateRepositorySave = (entities: Array<Pokemon | null>) => {
    entities.forEach((entity) => {
      jest.spyOn(repository, 'save').mockResolvedValueOnce(entity);
    });
  };

  const generateRepositoryCreateQueryBuilder = (
    services: Array<{
      type: 'getOne' | 'getManyAndCount' | 'getMany';
      resolve: Pokemon | Array<Pokemon>;
    }>,
  ) => {
    services.forEach((service) => {
      const result =
        isArray(service.resolve) && service.type === 'getManyAndCount'
          ? [service.resolve, service.resolve.length]
          : service.resolve;
      jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
        where: jest.fn(),
        orderBy: jest.fn(),
        andWhere: jest.fn(),
        withDeleted: jest.fn(),
        leftJoinAndSelect: jest.fn(),
        [service.type]: jest.fn().mockResolvedValueOnce(result),
      } as any);
    });
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        { provide: getRepositoryToken(Pokemon), useClass: Repository },
        { provide: getRepositoryToken(Type), useClass: Repository },
        { provide: getRepositoryToken(Move), useClass: Repository },
        { provide: getRepositoryToken(Ability), useClass: Repository },
        { provide: getRepositoryToken(Pokedex), useClass: Repository },
        {
          provide: TypeService,
          useValue: {
            generate: jest.fn(),
          },
        },
        {
          provide: MoveService,
          useValue: {
            generate: jest.fn(),
            cleanMoves: jest.fn(),
          },
        },
        {
          provide: StatService,
          useValue: {
            generate: jest.fn(),
          },
        },
        {
          provide: AbilityService,
          useValue: {
            generate: jest.fn(),
          },
        },
        {
          provide: PokedexService,
          useValue: {
            create: jest.fn(),
            update: jest.fn(),
            findOne: jest.fn(),
            addInPokeDex: jest.fn(),
          },
        },
        {
          provide: EvolutionsService,
          useValue: {
            generate: jest.fn(),
          },
        },
        {
          provide: PokemonApi,
          useValue: {
            getAll: jest.fn(),
            getByName: jest.fn(),
            getEvolutions: jest.fn(),
            getSpecieByName: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    repository = module.get<Repository<Pokemon>>(getRepositoryToken(Pokemon));
    pokemonApi = module.get<PokemonApi>(PokemonApi);
    typeService = module.get<TypeService>(TypeService);
    statService = module.get<StatService>(StatService);
    moveService = module.get<MoveService>(MoveService);
    abilityService = module.get<AbilityService>(AbilityService);
    pokeDexService = module.get<PokedexService>(PokedexService);
    evolutionService = module.get<EvolutionsService>(EvolutionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
    expect(pokemonApi).toBeDefined();
    expect(typeService).toBeDefined();
    expect(statService).toBeDefined();
    expect(moveService).toBeDefined();
    expect(abilityService).toBeDefined();
    expect(pokeDexService).toBeDefined();
    expect(evolutionService).toBeDefined();
  });
  // findAll ----------------------------------------------------------------------------------------------------- BEGIN
  it('should throw error when not found list of pokemon in database and response broke', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(0);

    const result = service.findAll({});

    await expect(result).rejects.toThrow(InternalServerErrorException);
  });

  it('should throw error when failed in save list of pokemons', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(0);

    generateResponseApi(0, ['getAll']);

    generateRepositorySave(RESPONSE_POKEMON_BASE_FIXTURE_LIST.map(() => null));

    const result = service.findAll({});

    await expect(result).rejects.toThrow(InternalServerErrorException);
  });

  it('should return list of pokemons when not found in the database and generates the list from an external API', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(0);

    generateResponseApi(0, ['getAll']);

    generateRepositorySave([
      ENTITY_POKEMON_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_FIXTURE_VENUSAUR,
    ]);

    generateRepositoryCreateQueryBuilder([
      {
        type: 'getMany',
        resolve: [
          ENTITY_POKEMON_FIXTURE_BULBASAUR,
          ENTITY_POKEMON_FIXTURE_IVYSAUR,
          ENTITY_POKEMON_FIXTURE_VENUSAUR,
        ],
      },
    ]);

    const result = await service.findAll({});

    expect(result).toEqual([
      ENTITY_POKEMON_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_FIXTURE_VENUSAUR,
    ]);
  });

  it('should return list of pokemons when total of pokemons in database is different about total of pokemons default', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1301);

    generateResponseApi(0, ['getAll']);

    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce([ENTITY_POKEMON_FIXTURE_BULBASAUR]);

    generateRepositorySave([
      ENTITY_POKEMON_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_FIXTURE_VENUSAUR,
    ]);

    generateRepositoryCreateQueryBuilder([
      {
        type: 'getMany',
        resolve: [
          ENTITY_POKEMON_FIXTURE_BULBASAUR,
          ENTITY_POKEMON_FIXTURE_IVYSAUR,
          ENTITY_POKEMON_FIXTURE_VENUSAUR,
        ],
      },
    ]);

    const result = await service.findAll({});

    expect(result).toEqual([
      ENTITY_POKEMON_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_FIXTURE_VENUSAUR,
    ]);
  });

  it('should return list of pokemons in the database', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);

    generateRepositoryCreateQueryBuilder([
      {
        type: 'getMany',
        resolve: [
          ENTITY_POKEMON_FIXTURE_BULBASAUR,
          ENTITY_POKEMON_FIXTURE_IVYSAUR,
          ENTITY_POKEMON_FIXTURE_VENUSAUR,
        ],
      },
    ]);
    const result = await service.findAll({});

    expect(result).toEqual([
      ENTITY_POKEMON_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_FIXTURE_VENUSAUR,
    ]);
  });

  it('should return list of pokemons in the database with filters', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);

    generateRepositoryCreateQueryBuilder([
      {
        type: 'getManyAndCount',
        resolve: [
          ENTITY_POKEMON_FIXTURE_BULBASAUR,
          ENTITY_POKEMON_FIXTURE_IVYSAUR,
          ENTITY_POKEMON_FIXTURE_VENUSAUR,
        ],
      },
    ]);

    const result = await service.findAll({
      asc: 'name',
      page: 1,
      limit: 10,
      status: EStatus.INCOMPLETE,
    });

    expect(result).toEqual({
      ...PAGINATE,
      next: null,
      pages: 1,
      total: 3,
      data: [
        ENTITY_POKEMON_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_FIXTURE_IVYSAUR,
        ENTITY_POKEMON_FIXTURE_VENUSAUR,
      ],
    });
  });
  // findAll ------------------------------------------------------------------------------------------------------- END

  // findOne ----------------------------------------------------------------------------------------------------- BEGIN
  it('should throw error when not found pokemon in database', async () => {
    generateRepositoryCreateQueryBuilder([
      {
        type: 'getOne',
        resolve: null,
      },
    ]);

    const result = service.findOne(ENTITY_POKEMON_FIXTURE_BULBASAUR.name);

    await expect(result).rejects.toThrow(NotFoundException);
  });

  it('should return null when not found pokemon in database', async () => {
    generateRepositoryCreateQueryBuilder([
      {
        type: 'getOne',
        resolve: null,
      },
    ]);

    const result = await service.findOne(
      ENTITY_POKEMON_FIXTURE_BULBASAUR.id,
      false,
    );

    expect(result).toEqual(null);
  });

  it('should return incomplete pokemon of database', async () => {
    generateRepositoryCreateQueryBuilder([
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_BULBASAUR,
      },
    ]);

    const result = await service.findOne(
      ENTITY_POKEMON_FIXTURE_BULBASAUR.name,
      false,
      false,
    );

    expect(result).toEqual(ENTITY_POKEMON_FIXTURE_BULBASAUR);
  });

  it('should return pokemon by name and complete status in database with all evolutions complete', async () => {
    const pokemon = {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
      ],
    };

    jest
      .spyOn(moveService, 'cleanMoves')
      .mockReturnValueOnce(ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.moves);

    generateRepositoryCreateQueryBuilder([
      {
        type: 'getOne',
        resolve: pokemon,
      },
    ]);

    const result = await service.findOne(pokemon.name);

    expect(result).toEqual(pokemon);
  });

  it('should return pokemon by id and complete status in database with all evolutions incomplete', async () => {
    const pokemon = {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_FIXTURE_IVYSAUR,
        ENTITY_POKEMON_FIXTURE_VENUSAUR,
      ],
    };

    generateResponseApi(2, ['getAll', 'getByName', 'getSpecieByName']);

    generateDependencies([
      {
        type: 'typeService',
        service: typeService,
      },
      {
        type: 'statService',
        service: statService,
      },
      {
        order: 2,
        type: 'moveService',
        service: moveService,
      },
      {
        type: 'abilityService',
        service: abilityService,
      },
      {
        type: 'evolutionService',
        service: evolutionService,
      },
    ]);

    jest
      .spyOn(moveService, 'cleanMoves')
      .mockReturnValueOnce(ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.moves);

    generateRepositoryCreateQueryBuilder([
      {
        type: 'getOne',
        resolve: pokemon,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_IVYSAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_BULBASAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_IVYSAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_VENUSAUR,
      },
    ]);

    generateRepositorySave([ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR]);

    const result = await service.findOne(pokemon.id);

    expect(result).toEqual({
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
        ENTITY_POKEMON_FIXTURE_VENUSAUR,
      ],
    });
  });

  it('should throw error to try complete evolution', async () => {
    const pokemon = {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_FIXTURE_IVYSAUR,
        ENTITY_POKEMON_FIXTURE_VENUSAUR,
      ],
    };

    generateRepositoryCreateQueryBuilder([
      {
        type: 'getOne',
        resolve: pokemon,
      },
    ]);

    const result = service.findOne(pokemon.id);

    await expect(result).rejects.toThrow(InternalServerErrorException);
  });

  it('should return pokemon by name not complete in database and generate with api', async () => {
    generateRepositoryCreateQueryBuilder([
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_BULBASAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_BULBASAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_IVYSAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_VENUSAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      },
    ]);
    generateResponseApi(1, ['getByName', 'getSpecieByName', 'getEvolutions']);

    generateDependencies([
      {
        type: 'typeService',
        service: typeService,
      },
      {
        type: 'statService',
        service: statService,
      },
      {
        order: 1,
        type: 'moveService',
        service: moveService,
      },
      {
        type: 'abilityService',
        service: abilityService,
      },
      {
        type: 'evolutionService',
        service: evolutionService,
      },
    ]);

    jest
      .spyOn(moveService, 'cleanMoves')
      .mockReturnValueOnce(ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.moves);

    generateRepositorySave([ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR]);

    const result = await service.findOne(ENTITY_POKEMON_FIXTURE_BULBASAUR.name);
    expect(result).toEqual(ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR);
  });

  it('should throw error when  pokemon by name not complete in database and generate with api and broke try save', async () => {
    generateRepositoryCreateQueryBuilder([
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_BULBASAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_BULBASAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_IVYSAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_FIXTURE_VENUSAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      },
    ]);
    generateResponseApi(1, ['getByName', 'getSpecieByName', 'getEvolutions']);

    generateDependencies([
      {
        type: 'typeService',
        service: typeService,
      },
      {
        type: 'statService',
        service: statService,
      },
      {
        order: 1,
        type: 'moveService',
        service: moveService,
      },
      {
        type: 'abilityService',
        service: abilityService,
      },
      {
        type: 'evolutionService',
        service: evolutionService,
      },
    ]);

    const result = service.findOne(ENTITY_POKEMON_FIXTURE_BULBASAUR.name);
    await expect(result).rejects.toThrow(InternalServerErrorException);
  });
  // findOne ------------------------------------------------------------------------------------------------------- END

  // addPokemon----------------------------------------------------------------------------------------------------BEGIN
  it('should throw error when try to add pokemon with names and ids empty', async () => {
    const result = service.addPokemonToPokedex(USER_COMPLETE_FIXTURE, {});

    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should throw error when try to add pokemon with more then 4', async () => {
    const result = service.addPokemonToPokedex(USER_COMPLETE_FIXTURE, {
      ids: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.id,
        ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR.id,
        ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR.id,
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.id,
      ],
    });

    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should create a pokedex with 3 pokemons', async () => {
    generateRepositoryCreateQueryBuilder([
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
      },
      {
        type: 'getOne',
        resolve: ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
      },
    ]);

    jest
      .spyOn(pokeDexService, 'addInPokeDex')
      .mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE);

    const result = await service.addPokemonToPokedex(USER_COMPLETE_FIXTURE, {
      ids: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.id,
        ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR.id,
        ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR.id,
      ],
    });

    expect(result).toEqual(POKEDEX_FIXTURE_ACTIVE);
  });
  // addPokemon------------------------------------------------------------------------------------------------------END

  // findPokedex---------------------------------------------------------------------------------------------------BEGIN
  it('should return a pokedex with user active', async () => {
    jest
      .spyOn(pokeDexService, 'findOne')
      .mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE);

    const result = await service.findPokedex(USER_COMPLETE_FIXTURE);

    expect(result).toEqual(POKEDEX_FIXTURE_ACTIVE);
  });
  // findPokedex-----------------------------------------------------------------------------------------------------END
});
