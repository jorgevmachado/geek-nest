import { Test, TestingModule } from '@nestjs/testing';
import { PokedexService } from './pokedex.service';
import { Repository } from 'typeorm';
import { Pokedex } from './pokedex.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { POKEDEX_FIXTURE_ACTIVE } from './pokedex.fixture';
import { USER_COMPLETE_FIXTURE } from '../../users/users.fixture';

describe('PokedexService', () => {
  let service: PokedexService;
  let repository: Repository<Pokedex>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokedexService,
        { provide: getRepositoryToken(Pokedex), useClass: Repository },
      ],
    }).compile();

    service = module.get<PokedexService>(PokedexService);
    repository = module.get<Repository<Pokedex>>(getRepositoryToken(Pokedex));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should findOne pokedex', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE),
    } as any);

    const result = await service.findOne(USER_COMPLETE_FIXTURE.id);

    expect(result).toEqual(POKEDEX_FIXTURE_ACTIVE);
  });

  it('should create pokedex', async () => {
    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...POKEDEX_FIXTURE_ACTIVE,
      account: USER_COMPLETE_FIXTURE,
    });

    const result = await service.create(
      USER_COMPLETE_FIXTURE,
      POKEDEX_FIXTURE_ACTIVE.pokemons,
    );

    expect(result).toEqual({
      ...POKEDEX_FIXTURE_ACTIVE,
      account: USER_COMPLETE_FIXTURE,
    });
  });

  it('should create pokedex error', async () => {
    const result = service.create(
      USER_COMPLETE_FIXTURE,
      POKEDEX_FIXTURE_ACTIVE.pokemons,
    );

    await expect(result).rejects.toThrow();
  });

  it('should update pokedex', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...POKEDEX_FIXTURE_ACTIVE,
        account: USER_COMPLETE_FIXTURE,
      }),
    } as any);

    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...POKEDEX_FIXTURE_ACTIVE,
      account: USER_COMPLETE_FIXTURE,
    });

    const result = await service.update(
      USER_COMPLETE_FIXTURE,
      POKEDEX_FIXTURE_ACTIVE.pokemons,
    );

    expect(result).toEqual({
      ...POKEDEX_FIXTURE_ACTIVE,
      account: USER_COMPLETE_FIXTURE,
    });
  });

  it('should update pokedex with error', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...POKEDEX_FIXTURE_ACTIVE,
        account: USER_COMPLETE_FIXTURE,
      }),
    } as any);

    const result = service.update(
      USER_COMPLETE_FIXTURE,
      POKEDEX_FIXTURE_ACTIVE.pokemons,
    );

    await expect(result).rejects.toThrow();
  });

  it('should getPokedexPokemonsList by name pokedex', async () => {
    const result = service.getPokedexPokemonsList(
      {
        ...POKEDEX_FIXTURE_ACTIVE,
        account: USER_COMPLETE_FIXTURE,
      },
      ['Bulbasaur', 'Charmander', 'Squirtle'],
    );

    expect(result).toEqual({
      items: ['Bulbasaur', 'Charmander', 'Squirtle'],
      pokemonsExists: [],
      pokemonsNotExists: ['Bulbasaur', 'Charmander', 'Squirtle'],
    });
  });

  it('should getPokedexPokemonsList by id pokedex', async () => {
    const result = service.getPokedexPokemonsList(
      {
        ...POKEDEX_FIXTURE_ACTIVE,
        account: USER_COMPLETE_FIXTURE,
        pokemons: [
          {
            ...POKEDEX_FIXTURE_ACTIVE.pokemons[0],
            id: '739fb465-efb9-42b8-b8b1-9a5b61087fc2',
          },
          {
            ...POKEDEX_FIXTURE_ACTIVE.pokemons[1],
            id: '78577b5d-2635-4cd8-84fe-4d5cedd622ff',
          },
          {
            ...POKEDEX_FIXTURE_ACTIVE.pokemons[2],
            id: '4c08aa4d-df83-4107-a8e5-b6f4a9cbef6e',
          },
        ],
      },
      [
        '739fb465-efb9-42b8-b8b1-9a5b61087fc2',
        '78577b5d-2635-4cd8-84fe-4d5cedd622ff',
        '4c08aa4d-df83-4107-a8e5-b6f4a9cbef6e',
      ],
    );

    expect(result).toEqual({
      items: [
        '739fb465-efb9-42b8-b8b1-9a5b61087fc2',
        '78577b5d-2635-4cd8-84fe-4d5cedd622ff',
        '4c08aa4d-df83-4107-a8e5-b6f4a9cbef6e',
      ],
      pokemonsExists: [
        '739fb465-efb9-42b8-b8b1-9a5b61087fc2',
        '78577b5d-2635-4cd8-84fe-4d5cedd622ff',
        '4c08aa4d-df83-4107-a8e5-b6f4a9cbef6e',
      ],
      pokemonsNotExists: [],
    });
  });
});
