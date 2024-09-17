import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Move } from './move.entity';
import { MoveService } from './move.service';

import {
  ENTITIES_MOVES_FIXTURE_BULBASAUR,
  ENTITIES_MOVES_FIXTURE_IVYSAUR,
} from './move.fixture';
import {
  RESPONSE_MOVES_FIXTURE_BULBASAUR,
  RESPONSE_MOVES_FIXTURE_IVYSAUR,
} from '@/modules/pokemon/fixtures/response/by-name/pokemon.response.pokemon-by-name-moves.fixture';
import { PokemonApi } from '@/modules/pokemon/pokemon.api';

import {
  RESPONSE_MOVE_FIXTURE_BIND_ITEM,
  RESPONSE_MOVE_FIXTURE_CUT_ITEM,
  RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM,
  RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM,
} from '@/modules/pokemon/fixtures';

describe('MoveService', () => {
  let service: MoveService;
  let repository: Repository<Move>;
  let pokemonApi: PokemonApi;

  const getResponse = (move: Move) => {
    switch (move.name) {
      case 'razor-wind':
        return RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM;
      case 'swords-dance':
        return RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM;
      case 'cut':
        return RESPONSE_MOVE_FIXTURE_CUT_ITEM;
      case 'bind':
        return RESPONSE_MOVE_FIXTURE_BIND_ITEM;
    }
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoveService,
        { provide: getRepositoryToken(Move), useClass: Repository },
        {
          provide: PokemonApi,
          useValue: {
            getAll: jest.fn(),
            getMove: jest.fn(),
            getByName: jest.fn(),
            getEvolutions: jest.fn(),
            getSpecieByName: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MoveService>(MoveService);
    repository = module.get<Repository<Move>>(getRepositoryToken(Move));
    pokemonApi = module.get<PokemonApi>(PokemonApi);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
    expect(pokemonApi).toBeDefined();
  });

  it('should return a move when not found in the database', async () => {
    ENTITIES_MOVES_FIXTURE_BULBASAUR.forEach((move) => {
      jest
        .spyOn(pokemonApi, 'getMove')
        .mockResolvedValueOnce(getResponse(move));

      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
      jest.spyOn(repository, 'save').mockResolvedValueOnce(move);
    });

    const result = await service.generate(RESPONSE_MOVES_FIXTURE_BULBASAUR);
    expect(result).toEqual(ENTITIES_MOVES_FIXTURE_BULBASAUR);
  });

  it('should return a move when found in the database', async () => {
    ENTITIES_MOVES_FIXTURE_IVYSAUR.forEach((move) => {
      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(move);
    });

    const result = await service.generate(RESPONSE_MOVES_FIXTURE_IVYSAUR);

    expect(result).toEqual(ENTITIES_MOVES_FIXTURE_IVYSAUR);
  });

  it('should return a clean move with array move empty', async () => {
    const result = service.cleanMoves([]);
    expect(result).toEqual([]);
  });

  it('should return a clean move', async () => {
    const result = service.cleanMoves(ENTITIES_MOVES_FIXTURE_BULBASAUR);
    const received = ENTITIES_MOVES_FIXTURE_BULBASAUR.map((move) => {
      delete move.learned_by_pokemon;
      return move;
    });
    expect(result).toEqual(received);
  });

  it('should return null when to try generate a move if response broke', async () => {
    ENTITIES_MOVES_FIXTURE_BULBASAUR.forEach((move) => {
      jest.spyOn(pokemonApi, 'getMove').mockResolvedValueOnce(null);

      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
      jest.spyOn(repository, 'save').mockResolvedValueOnce(move);
    });

    const result = await service.generate(RESPONSE_MOVES_FIXTURE_BULBASAUR);

    expect(result).toEqual([]);
  });
});
