import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Move } from './move.entity';
import { MoveService } from './move.service';

import { ENTITY_MOVES_FIXTURE, RESPONSE_MOVE_FIXTURE } from './move.fixture';

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

  it('should generate a move when not found in the database', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_MOVES_FIXTURE[0]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_MOVES_FIXTURE[1]);
    const result = await service.generate(RESPONSE_MOVE_FIXTURE);
    expect(result).toEqual(ENTITY_MOVES_FIXTURE);
  });

  it('should return a move when found in the database', async () => {
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_MOVES_FIXTURE[0]);
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_MOVES_FIXTURE[1]);

    const result = await service.generate(RESPONSE_MOVE_FIXTURE);

    expect(result).toEqual(ENTITY_MOVES_FIXTURE);
  });
});
