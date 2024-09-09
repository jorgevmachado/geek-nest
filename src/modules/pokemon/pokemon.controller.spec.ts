import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';

import { EStatus } from '@/enums/status.enum';

import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

import {
  ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR,
  ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR,
} from '@/modules/pokemon/pokemon.fixture';
import { POKEDEX_FIXTURE_ACTIVE } from '@/modules/pokemon/pokedex/pokedex.fixture';
import { USER_COMPLETE_FIXTURE } from '@/modules/auth/users/users.fixture';

describe('PokemonController', () => {
  let controller: PokemonController;
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      controllers: [PokemonController],
      providers: [
        {
          provide: PokemonService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            findPokedex: jest.fn(),
            addPokemonToPokedex: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should be get success', async () => {
    jest
      .spyOn(service, 'findAll')
      .mockResolvedValueOnce([ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR]);

    const result = await controller.findAll({});

    expect(result).toEqual([ENTITY_POKEMON_COMPLETE_FIXTURE_BULBASAUR]);
  });

  it('should be get with param success', async () => {
    jest
      .spyOn(service, 'findOne')
      .mockResolvedValueOnce(ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR);
    const result = await controller.findOne(
      ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR.name,
    );
    expect(result).toEqual(ENTITY_POKEMON_COMPLETE_FIXTURE_IVYSAUR);
  });

  it('should be addPokemon with param success', async () => {
    jest
      .spyOn(service, 'addPokemonToPokedex')
      .mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE);
    const result = await controller.addPokemonToPokedex(
      {
        ...USER_COMPLETE_FIXTURE,
        status: EStatus.ACTIVE,
      },
      {
        names: ['Bulbasaur', 'Charmander', 'Squirtle'],
      },
    );
    expect(result).toEqual(POKEDEX_FIXTURE_ACTIVE);
  });

  it('should be findPokedex with param success', async () => {
    jest
      .spyOn(service, 'findPokedex')
      .mockResolvedValueOnce(POKEDEX_FIXTURE_ACTIVE);
    const result = await controller.findPokedex({
      ...USER_COMPLETE_FIXTURE,
      status: EStatus.ACTIVE,
    });
    expect(result).toEqual(POKEDEX_FIXTURE_ACTIVE);
  });
});
