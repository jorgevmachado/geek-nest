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

describe('MoveService', () => {
  let service: MoveService;
  let repository: Repository<Move>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoveService,
        { provide: getRepositoryToken(Move), useClass: Repository },
      ],
    }).compile();

    service = module.get<MoveService>(MoveService);
    repository = module.get<Repository<Move>>(getRepositoryToken(Move));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a move when not found in the database', async () => {
    ENTITIES_MOVES_FIXTURE_BULBASAUR.forEach((move) => {
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
});
