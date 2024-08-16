import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeService } from './type/type.service';
import { MoveService } from './move/move.service';
import { StatService } from './stat/stat.service';
import { AbilityService } from './ability/ability.service';
import { Type } from './type/type.entity';
import { Stat } from './stat/stat.entity';
import { Move } from './move/move.entity';
import { Ability } from './ability/ability.entity';
import {
  ENTITY_POKEMON_COMPLETE_FIXTURE_BLASTOISE,
  ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_COMPLETE_FIXTURE_CHARIZARD,
  ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER,
  ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMELEON,
  ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
  ENTITY_POKEMON_COMPLETE_FIXTURE_SQUIRTLE,
  ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
  ENTITY_POKEMON_COMPLETE_FIXTURE_WARTORTLE,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
  ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
  ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST,
  ENTITY_POKEMONS_INCOMPLETE_FIXTURE_PAGINATE,
  RESPONSE_POKEMON_BY_NAME_FIXTURE_BULBASAUR,
  RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR,
  RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR,
  RESPONSE_POKEMON_SPECIE_FIXTURE_BULBASAUR,
  RESPONSE_POKEMON_SPECIE_FIXTURE_IVYSAUR,
  RESPONSE_POKEMONS_FIXTURE_PAGINATE,
} from './pokemon.fixture';
import { PokemonApi } from './pokemon.api';
import { Pokedex } from './pokedex/pokedex.entity';
import { PokedexService } from './pokedex/pokedex.service';
import { USER_COMPLETE_FIXTURE } from '../users/users.fixture';
import { POKEDEX_FIXTURE_ACTIVE } from './pokedex/pokedex.fixture';
import { ENTITY_ABILITIES_FIXTURE } from './ability/ability.fixture';
import { ENTITY_MOVES_FIXTURE } from './move/move.fixture';
import { ENTITY_STATS_FIXTURE } from './stat/stat.fixture';
import { ENTITY_TYPES_FIXTURE } from './type/type.fixture';
import { EStatus } from '../../enums/status.enum';

describe('PokemonService', () => {
  let service: PokemonService;
  let repository: Repository<Pokemon>;
  let pokemonApi: PokemonApi;
  let typeService: TypeService;
  let statService: StatService;
  let moveService: MoveService;
  let abilityService: AbilityService;
  let pokeDexService: PokedexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        { provide: getRepositoryToken(Pokemon), useClass: Repository },
        { provide: getRepositoryToken(Type), useClass: Repository },
        { provide: getRepositoryToken(Stat), useClass: Repository },
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
            getPokedexPokemonsList: jest.fn(),
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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should generate a Pokémons when not found in the database', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(0);
    jest
      .spyOn(pokemonApi, 'getAll')
      .mockResolvedValueOnce(RESPONSE_POKEMONS_FIXTURE_PAGINATE);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMANDER);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARMELEON);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_CHARIZARD);
    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce(ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST);
    const result = await service.findAll({});
    expect(result).toEqual(ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST);
  });

  it('findAll should return error when api fail', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(0);
    await expect(service.findAll({})).rejects.toThrow();
  });

  it('findAll should return error when save fail', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(0);
    jest
      .spyOn(pokemonApi, 'getAll')
      .mockResolvedValueOnce(RESPONSE_POKEMONS_FIXTURE_PAGINATE);
    await expect(service.findAll({})).rejects.toThrow();
  });

  it('must return the findAll method without filters pokemons when found in the database.', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);
    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce(ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST);

    const result = await service.findAll({});
    expect(result).toEqual(ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST);
  });

  it('must return the findAll method with filters pokemons when found in database.', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);
    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce(ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST);

    const list = ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST.concat(
      ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST,
    )
      .concat(ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST)
      .concat(ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST);
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getManyAndCount: jest.fn().mockResolvedValueOnce([list, list.length]),
    } as any);
    const result = await service.findAll({
      page: 3,
      limit: 10,
      desc: 'name',
    });

    expect(result).toEqual({
      ...ENTITY_POKEMONS_INCOMPLETE_FIXTURE_PAGINATE,
      prev: 2,
      skip: 20,
      next: null,
      data: list,
      total: list.length,
      pages: 3,
      current_page: 3,
    });
  });

  it('must return the findAll method with filters pokemons when found in database error in asc and desc.', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);
    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce(ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getManyAndCount: jest
        .fn()
        .mockResolvedValueOnce([
          ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST,
          ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST.length,
        ]),
    } as any);

    await expect(
      service.findAll({
        page: 1,
        limit: 10,
        asc: 'name',
        desc: 'name',
      }),
    ).rejects.toThrow();
  });

  it('must return the findAll method with filter status incomplete pokemons when found in database.', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);
    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce(ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getManyAndCount: jest
        .fn()
        .mockResolvedValueOnce([
          ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST.concat(
            ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST,
          ),
          ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST.length +
            ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST.length,
        ]),
    } as any);
    const result = await service.findAll({
      page: 2,
      limit: 10,
      status: EStatus.INCOMPLETE,
    });

    expect(result).toEqual({
      ...ENTITY_POKEMONS_INCOMPLETE_FIXTURE_PAGINATE,
      current_page: 2,
      pages: 2,
      prev: 1,
      total: 12,
      skip: 10,
      data: ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST.concat(
        ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST,
      ),
    });
  });

  it('must return the findAll method with filter name bulbasaur pokemons when found in database.', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);
    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce(ENTITY_POKEMONS_INCOMPLETE_FIXTURE_LIST);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getManyAndCount: jest
        .fn()
        .mockResolvedValueOnce([
          [ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR],
          1,
        ]),
    } as any);
    const result = await service.findAll({
      page: 1,
      limit: 10,
      name: ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR.name,
    });

    expect(result).toEqual({
      ...ENTITY_POKEMONS_INCOMPLETE_FIXTURE_PAGINATE,
      next: null,
      total: 1,
      data: [ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR],
    });
  });

  it('must return the findOne when is incomplete and generate in the database', async () => {
    const pokemon = ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR;

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR),
    } as any);

    jest.spyOn(pokemonApi, 'getByName').mockResolvedValueOnce({
      ...RESPONSE_POKEMON_BY_NAME_FIXTURE_BULBASAUR,
      sprites: undefined,
    });

    jest.spyOn(pokemonApi, 'getSpecieByName').mockResolvedValueOnce({
      ...RESPONSE_POKEMON_SPECIE_FIXTURE_BULBASAUR,
      habitat: undefined,
      evolves_from_species: {
        name: 'ivysaur',
      },
    });

    jest
      .spyOn(pokemonApi, 'getEvolutions')
      .mockResolvedValueOnce(RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR);

    jest
      .spyOn(typeService, 'generate')
      .mockReturnValueOnce(Promise.resolve(ENTITY_TYPES_FIXTURE));

    jest
      .spyOn(statService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_STATS_FIXTURE));

    jest
      .spyOn(moveService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_MOVES_FIXTURE));

    jest
      .spyOn(abilityService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_ABILITIES_FIXTURE));

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR),
    } as any);
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR),
    } as any);

    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR);

    const result = await service.findOne(
      ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.name,
    );

    expect(result).toEqual(pokemon);
  });

  it('must return the findOne when is incomplete with error api byName', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR),
    } as any);

    await expect(
      service.findOne(ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.name),
    ).rejects.toThrow();
  });

  it('must return the findOne when is incomplete with error in typeService generate', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_BULBASAUR),
    } as any);

    jest
      .spyOn(pokemonApi, 'getByName')
      .mockResolvedValueOnce(RESPONSE_POKEMON_BY_NAME_FIXTURE_BULBASAUR);

    jest
      .spyOn(pokemonApi, 'getSpecieByName')
      .mockResolvedValueOnce(RESPONSE_POKEMON_SPECIE_FIXTURE_BULBASAUR);

    jest
      .spyOn(pokemonApi, 'getEvolutions')
      .mockResolvedValueOnce(RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR);

    jest.spyOn(typeService, 'generate').mockReturnValueOnce(null);

    jest
      .spyOn(statService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_STATS_FIXTURE));

    jest
      .spyOn(moveService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_MOVES_FIXTURE));

    jest
      .spyOn(abilityService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_ABILITIES_FIXTURE));

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR),
    } as any);

    await expect(
      service.findOne(ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.name),
    ).rejects.toThrow();
  });

  it('must return the findOne when is complete in the database with generate one evolution in database', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        evolutions: [
          ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
          ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
          ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
        ],
      }),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest
        .fn()
        .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR),
    } as any);

    jest.spyOn(pokemonApi, 'getByName').mockResolvedValueOnce({
      ...RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR,
      sprites: {
        ...RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR.sprites,
        front_default: '',
      },
    });

    jest
      .spyOn(pokemonApi, 'getSpecieByName')
      .mockResolvedValueOnce(RESPONSE_POKEMON_SPECIE_FIXTURE_IVYSAUR);

    jest
      .spyOn(pokemonApi, 'getEvolutions')
      .mockResolvedValueOnce(RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR);

    jest
      .spyOn(typeService, 'generate')
      .mockReturnValueOnce(Promise.resolve(ENTITY_TYPES_FIXTURE));

    jest
      .spyOn(statService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_STATS_FIXTURE));

    jest
      .spyOn(moveService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_MOVES_FIXTURE));

    jest
      .spyOn(abilityService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_ABILITIES_FIXTURE));

    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR);

    const result = await service.findOne(
      ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.name,
    );

    const expected = {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
      ],
    };

    expect(result).toEqual(expected);
  });

  it('must return the findOne when is complete in the database with generate one evolution in database api getEvolutions error', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        evolutions: [
          ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
          ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
          ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
        ],
      }),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        evolutions: [],
      }),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
        evolutions: [],
      }),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
        evolutions: [],
      }),
    } as any);

    jest.spyOn(pokemonApi, 'getByName').mockResolvedValueOnce({
      ...RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR,
      sprites: {
        ...RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR.sprites,
        front_default: '',
      },
    });

    jest
      .spyOn(pokemonApi, 'getSpecieByName')
      .mockResolvedValueOnce(RESPONSE_POKEMON_SPECIE_FIXTURE_IVYSAUR);

    jest.spyOn(pokemonApi, 'getEvolutions').mockResolvedValueOnce(null);

    jest
      .spyOn(typeService, 'generate')
      .mockReturnValueOnce(Promise.resolve(ENTITY_TYPES_FIXTURE));

    jest
      .spyOn(statService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_STATS_FIXTURE));

    jest
      .spyOn(moveService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_MOVES_FIXTURE));

    jest
      .spyOn(abilityService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_ABILITIES_FIXTURE));

    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
      evolutions: [],
    });

    const result = await service.findOne(
      ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.name,
    );

    const expected = {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
        {
          ...ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
          evolutions: [],
        },
      ],
    };

    expect(result).toEqual(expected);
  });

  it('must return the findOne when is complete in the database with generate one evolution in database api getEvolutions without chain.species.name', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        evolutions: [
          ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
          ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
          ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
        ],
      }),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        evolutions: [],
      }),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
        evolutions: [],
      }),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
        evolutions: [],
      }),
    } as any);

    jest.spyOn(pokemonApi, 'getByName').mockResolvedValueOnce({
      ...RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR,
      sprites: {
        ...RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR.sprites,
        front_default: '',
      },
    });

    jest
      .spyOn(pokemonApi, 'getSpecieByName')
      .mockResolvedValueOnce(RESPONSE_POKEMON_SPECIE_FIXTURE_IVYSAUR);

    jest.spyOn(pokemonApi, 'getEvolutions').mockResolvedValueOnce({
      ...RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR,
      chain: {
        ...RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR.chain,
        evolves_to: [],
        species: {
          ...RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR.chain.species,
          name: undefined,
        },
      },
    });

    jest
      .spyOn(typeService, 'generate')
      .mockReturnValueOnce(Promise.resolve(ENTITY_TYPES_FIXTURE));

    jest
      .spyOn(statService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_STATS_FIXTURE));

    jest
      .spyOn(moveService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_MOVES_FIXTURE));

    jest
      .spyOn(abilityService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_ABILITIES_FIXTURE));

    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
      evolutions: [],
    });

    const result = await service.findOne(
      ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.name,
    );

    const expected = {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
        {
          ...ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
          evolutions: [],
        },
      ],
    };

    expect(result).toEqual(expected);
  });

  it('must return the findOne when is complete in the database with generate one evolution in database api getEvolutions without evolutions', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        evolutions: [
          ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
          ENTITY_POKEMON_INCOMPLETE_FIXTURE_IVYSAUR,
          ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
        ],
      }),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce(null),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce(null),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce(null),
    } as any);

    jest.spyOn(pokemonApi, 'getByName').mockResolvedValueOnce({
      ...RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR,
      sprites: {
        ...RESPONSE_POKEMON_BY_NAME_FIXTURE_IVYSAUR.sprites,
        front_default: '',
      },
    });

    jest
      .spyOn(pokemonApi, 'getSpecieByName')
      .mockResolvedValueOnce(RESPONSE_POKEMON_SPECIE_FIXTURE_IVYSAUR);

    jest.spyOn(pokemonApi, 'getEvolutions').mockResolvedValueOnce({
      ...RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR,
      chain: {
        ...RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR.chain,
        species: {
          ...RESPONSE_POKEMON_EVOLUTIONS_FIXTURE_BULBASAUR.chain.species,
          name: undefined,
        },
      },
    });

    jest
      .spyOn(typeService, 'generate')
      .mockReturnValueOnce(Promise.resolve(ENTITY_TYPES_FIXTURE));

    jest
      .spyOn(statService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_STATS_FIXTURE));

    jest
      .spyOn(moveService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_MOVES_FIXTURE));

    jest
      .spyOn(abilityService, 'generate')
      .mockResolvedValueOnce(Promise.resolve(ENTITY_ABILITIES_FIXTURE));

    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
      evolutions: [],
    });

    const result = await service.findOne(
      ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.name,
    );

    const expected = {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_INCOMPLETE_FIXTURE_VENUSAUR,
        {
          ...ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
          evolutions: [],
        },
      ],
    };

    expect(result).toEqual(expected);
  });

  it('must return the findOne when is complete in the database with evolutions complete in database', async () => {
    const expected = {
      ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      evolutions: [
        ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
        ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
      ],
    };

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce(expected),
    } as any);

    const result = await service.findOne(
      ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR.name,
    );

    expect(result).toEqual(expected);
  });

  it('add pokemon to pokedex without pokemons list error ', async () => {
    const result = service.addPokemon(USER_COMPLETE_FIXTURE, {});
    await expect(result).rejects.toThrow();
  });

  it('add pokemon to pokedex with pokemons list name with more then 3 error', async () => {
    const pokemonPokedexDto = {
      names: ['bulbasaur', 'ivysaur', 'charmander', 'squirtle'],
    };
    jest.spyOn(pokeDexService, 'findOne').mockResolvedValueOnce(null);
    const result = service.addPokemon(USER_COMPLETE_FIXTURE, pokemonPokedexDto);
    await expect(result).rejects.toThrow();
  });

  it('add pokemon to pokedex with pokemons list name and pokedex to create', async () => {
    const pokemonPokedexDto = {
      names: ['bulbasaur', 'charmander', 'squirtle'],
    };
    jest.spyOn(pokeDexService, 'findOne').mockResolvedValueOnce(null);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
        evolutions: [
          ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
          ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
          ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
        ],
      }),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER,
        evolutions: [
          ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER,
          ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMELEON,
          ENTITY_POKEMON_COMPLETE_FIXTURE_CHARIZARD,
        ],
      }),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_COMPLETE_FIXTURE_SQUIRTLE,
        evolutions: [
          ENTITY_POKEMON_COMPLETE_FIXTURE_SQUIRTLE,
          ENTITY_POKEMON_COMPLETE_FIXTURE_WARTORTLE,
          ENTITY_POKEMON_COMPLETE_FIXTURE_BLASTOISE,
        ],
      }),
    } as any);

    jest
      .spyOn(pokeDexService, 'create')
      .mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE);

    const result = await service.addPokemon(
      USER_COMPLETE_FIXTURE,
      pokemonPokedexDto,
    );

    expect(result).toEqual(POKEDEX_FIXTURE_ACTIVE);
  });

  it('add pokemon to pokedex with pokemons list name and pokedex created and pokemons repeats', async () => {
    const pokemonPokedexDto = {
      names: ['bulbasaur', 'charmander', 'squirtle'],
    };

    jest
      .spyOn(pokeDexService, 'findOne')
      .mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE);

    jest.spyOn(pokeDexService, 'getPokedexPokemonsList').mockReturnValueOnce({
      items: ['bulbasaur', 'charmander', 'squirtle'],
      pokemonsExists: ['bulbasaur', 'charmander', 'squirtle'],
      pokemonsNotExists: [],
    });

    const result = await service.addPokemon(
      USER_COMPLETE_FIXTURE,
      pokemonPokedexDto,
    );

    expect(result).toEqual(POKEDEX_FIXTURE_ACTIVE);
  });

  it('add pokemon to pokedex with pokemons list name and pokedex created and pokemons one new', async () => {
    const pokemonPokedexDto = {
      names: ['bulbasaur', 'charmander', 'squirtle'],
    };

    jest.spyOn(pokeDexService, 'findOne').mockResolvedValueOnce({
      ...POKEDEX_FIXTURE_ACTIVE,
      pokemons: POKEDEX_FIXTURE_ACTIVE.pokemons.filter(
        (item) => item.name !== 'squirtle',
      ),
    });

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...ENTITY_POKEMON_COMPLETE_FIXTURE_SQUIRTLE,
        evolutions: [
          ENTITY_POKEMON_COMPLETE_FIXTURE_SQUIRTLE,
          ENTITY_POKEMON_COMPLETE_FIXTURE_WARTORTLE,
          ENTITY_POKEMON_COMPLETE_FIXTURE_BLASTOISE,
        ],
      }),
    } as any);

    jest.spyOn(pokeDexService, 'getPokedexPokemonsList').mockReturnValueOnce({
      items: ['bulbasaur', 'charmander', 'squirtle'],
      pokemonsExists: ['bulbasaur', 'charmander'],
      pokemonsNotExists: ['squirtle'],
    });

    jest
      .spyOn(pokeDexService, 'update')
      .mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE);

    const result = await service.addPokemon(
      USER_COMPLETE_FIXTURE,
      pokemonPokedexDto,
    );

    expect(result).toEqual(POKEDEX_FIXTURE_ACTIVE);
  });

  it('add pokemon to pokedex with pokemons list id and pokedex created and pokemons one not found in database error', async () => {
    const pokemonPokedexDto = {
      ids: [
        '739fb465-efb9-42b8-b8b1-9a5b61087fc2',
        '78577b5d-2635-4cd8-84fe-4d5cedd622ff',
        '4c08aa4d-df83-4107-a8e5-b6f4a9cbef6e',
        '4c08aa4d-df83-4107-a8e5-b6f4a9cbef6f',
      ],
    };

    jest
      .spyOn(pokeDexService, 'findOne')
      .mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE);

    jest.spyOn(pokeDexService, 'getPokedexPokemonsList').mockReturnValueOnce({
      items: [
        '739fb465-efb9-42b8-b8b1-9a5b61087fc2',
        '78577b5d-2635-4cd8-84fe-4d5cedd622ff',
        '4c08aa4d-df83-4107-a8e5-b6f4a9cbef6e',
        '4c08aa4d-df83-4107-a8e5-b6f4a9cbef6f',
      ],
      pokemonsExists: [
        '739fb465-efb9-42b8-b8b1-9a5b61087fc2',
        '78577b5d-2635-4cd8-84fe-4d5cedd622ff',
        '4c08aa4d-df83-4107-a8e5-b6f4a9cbef6e',
      ],
      pokemonsNotExists: ['4c08aa4d-df83-4107-a8e5-b6f4a9cbef6f'],
    });

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce(null),
    } as any);

    const result = service.addPokemon(USER_COMPLETE_FIXTURE, pokemonPokedexDto);

    await expect(result).rejects.toThrow();
  });
});
