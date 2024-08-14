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
  ENTITY_POKEMON,
  ENTITY_POKEMON_INCOMPLETE_BULBASAUR,
  ENTITY_POKEMON_INCOMPLETE_CHARIZARD,
  ENTITY_POKEMON_INCOMPLETE_CHARMANDER,
  ENTITY_POKEMON_INCOMPLETE_CHARMELEON,
  ENTITY_POKEMON_INCOMPLETE_IVYSAUR,
  ENTITY_POKEMON_INCOMPLETE_VENUSAUR,
  ENTITY_POKEMONS_INCOMPLETE_LIST,
  POKEMONS_INCOMPLETE_FIXTURE,
  RESPONSE_POKEMON_FIXTURE_INCOMPLETE_BULBASAUR,
  RESPONSE_POKEMONS_PAGINATE_FIXTURE,
  transformResponsePokemonByName,
  transformResponsePokemonFull,
  transformResponsePokemonFullPokemon,
  transformResponsePokemonSpecie,
} from './pokemon.fixture';
import { PokemonApi } from './pokemon.api';
import { EStatus } from './pokemon.interface';
import { PAGINATE } from '../../fixtures';
import {
  RESPONSE_TYPE_FIXTURE,
  transformResponseType,
} from './type/type.fixture';
import {
  RESPONSE_STAT_FIXTURE,
  transformResponseStat,
} from './stat/stat.fixture';
import {
  RESPONSE_MOVE_FIXTURE,
  transformResponseMove,
} from './move/move.fixture';
import {
  RESPONSE_ABILITY_FIXTURE,
  transformResponseAbility,
} from './ability/ability.fixture';

describe('PokemonService', () => {
  let service: PokemonService;
  let repository: Repository<Pokemon>;
  let pokemonApi: PokemonApi;
  let typeService: TypeService;
  let statService: StatService;
  let moveService: MoveService;
  let abilityService: AbilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        { provide: getRepositoryToken(Pokemon), useClass: Repository },
        { provide: getRepositoryToken(Type), useClass: Repository },
        { provide: getRepositoryToken(Stat), useClass: Repository },
        { provide: getRepositoryToken(Move), useClass: Repository },
        { provide: getRepositoryToken(Ability), useClass: Repository },
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
          provide: PokemonApi,
          useValue: {
            getAll: jest.fn(),
            getByName: jest.fn(),
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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate a Pokémon when not found in the database', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(0);
    jest
      .spyOn(pokemonApi, 'getAll')
      .mockResolvedValueOnce(RESPONSE_POKEMONS_PAGINATE_FIXTURE);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_BULBASAUR);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_IVYSAUR);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_VENUSAUR);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_CHARMANDER);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_CHARMELEON);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_CHARIZARD);
    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce(ENTITY_POKEMONS_INCOMPLETE_LIST);
    const result = await service.findAll({});
    expect(result).toEqual(ENTITY_POKEMONS_INCOMPLETE_LIST);
  });

  it('must return the findAll method with database full.', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);
    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce(POKEMONS_INCOMPLETE_FIXTURE);

    expect(await service.findAll({})).toEqual(POKEMONS_INCOMPLETE_FIXTURE);
  });

  it('must return the findAll method with database full paginate.', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);
    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce(POKEMONS_INCOMPLETE_FIXTURE);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getManyAndCount: jest
        .fn()
        .mockResolvedValueOnce([[ENTITY_POKEMON_INCOMPLETE_BULBASAUR], 1]),
    } as any);

    expect(
      await service.findAll({
        page: 1,
        limit: 10,
        status: EStatus.INCOMPLETE,
        name: ENTITY_POKEMON_INCOMPLETE_BULBASAUR.name,
      }),
    ).toEqual({
      ...PAGINATE,
      next: null,
      pages: 1,
      total: 1,
      data: [ENTITY_POKEMON_INCOMPLETE_BULBASAUR],
    });
  });

  it('must return the findOne when is incomplete and generate in the database', async () => {
    const responsePokemonByName = transformResponsePokemonByName({
      response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_BULBASAUR,
    });
    const responsePokemonBySpecie = transformResponsePokemonSpecie({
      response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_BULBASAUR,
    });
    const type1 = transformResponseType(RESPONSE_TYPE_FIXTURE[0]);
    const type2 = transformResponseType(RESPONSE_TYPE_FIXTURE[0]);
    const stat1 = transformResponseStat(RESPONSE_STAT_FIXTURE[0]);
    const stat2 = transformResponseStat(RESPONSE_STAT_FIXTURE[1]);
    const stat3 = transformResponseStat(RESPONSE_STAT_FIXTURE[2]);
    const stat4 = transformResponseStat(RESPONSE_STAT_FIXTURE[3]);
    const move1 = transformResponseMove(RESPONSE_MOVE_FIXTURE[0]);
    const move2 = transformResponseMove(RESPONSE_MOVE_FIXTURE[1]);
    const ability1 = transformResponseAbility(RESPONSE_ABILITY_FIXTURE[0]);
    const ability2 = transformResponseAbility(RESPONSE_ABILITY_FIXTURE[1]);
    const responsePokemonFull = transformResponsePokemonFull({
      response: RESPONSE_POKEMON_FIXTURE_INCOMPLETE_BULBASAUR,
      responsePokemonByName: responsePokemonByName,
      responsePokemonBySpecie: responsePokemonBySpecie,
    });
    const pokemon = transformResponsePokemonFullPokemon({
      types: [type1, type2],
      stats: [stat1, stat2, stat3, stat4],
      moves: [move1, move2],
      response: responsePokemonFull,
      abilities: [ability1, ability2],
    });
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_POKEMON_INCOMPLETE_BULBASAUR);

    jest
      .spyOn(pokemonApi, 'getByName')
      .mockResolvedValueOnce(responsePokemonByName);

    jest
      .spyOn(pokemonApi, 'getSpecieByName')
      .mockResolvedValueOnce(responsePokemonBySpecie);

    jest
      .spyOn(typeService, 'generate')
      .mockReturnValueOnce(Promise.resolve([type1, type2]));

    jest
      .spyOn(statService, 'generate')
      .mockResolvedValueOnce(Promise.resolve([stat1, stat2, stat3, stat4]));

    jest
      .spyOn(moveService, 'generate')
      .mockResolvedValueOnce(Promise.resolve([move1, move2]));

    jest
      .spyOn(abilityService, 'generate')
      .mockResolvedValueOnce(Promise.resolve([ability1, ability2]));

    jest.spyOn(repository, 'save').mockResolvedValueOnce(pokemon);

    const result = await service.findOne(
      ENTITY_POKEMON_INCOMPLETE_BULBASAUR.name,
    );

    expect(result).toEqual(pokemon);
  });

  it('must return the findOne when is complete in the database', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(ENTITY_POKEMON);
    const result = await service.findOne(ENTITY_POKEMON.name);
    expect(result).toEqual(ENTITY_POKEMON);
  });
});
