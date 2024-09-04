import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Pokedex } from './pokedex.entity';
import { PokedexService } from './pokedex.service';

import {
  ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
  ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
} from '@/modules/pokemon/pokemon.fixture';
import { POKEDEX_FIXTURE_ACTIVE } from '@/modules/pokemon/pokedex/pokedex.fixture';
import { USER_COMPLETE_FIXTURE } from '@/modules/auth/users/users.fixture';

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

  it('should return pokedex successfully', async () => {
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

  it('should return create pokedex successfully', async () => {
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

  it('should throw error when create pokedex', async () => {
    const result = service.create(
      USER_COMPLETE_FIXTURE,
      POKEDEX_FIXTURE_ACTIVE.pokemons,
    );

    await expect(result).rejects.toThrow();
  });

  it('should return update pokedex successfully', async () => {
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

  it('should throw error when update pokedex', async () => {
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

  it('should return list of pokemons from a pokedex by name pokedex successfully', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE),
    } as any);

    const result = await service.addInPokeDex(USER_COMPLETE_FIXTURE, [
      ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
    ]);

    expect(result).toEqual({
      ...POKEDEX_FIXTURE_ACTIVE,
    });
  });

  it('should add list of pokemons from a pokedex by name pokedex successfully', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce({
        ...POKEDEX_FIXTURE_ACTIVE,
        pokemons: [ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR],
      }),
    } as any);

    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE);

    const result = await service.addInPokeDex(USER_COMPLETE_FIXTURE, [
      ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
    ]);

    expect(result).toEqual(POKEDEX_FIXTURE_ACTIVE);
  });

  it('should create a pokedex if not exist and list of pokemons from a pokedex by name pokedex successfully', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockResolvedValueOnce(null),
    } as any);

    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE);

    const result = await service.addInPokeDex(USER_COMPLETE_FIXTURE, [
      ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
      ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
      ENTITY_POKEMON_COMPLETE_FIXTURE_VENUSAUR,
    ]);

    expect(result).toEqual(POKEDEX_FIXTURE_ACTIVE);
  });
});
