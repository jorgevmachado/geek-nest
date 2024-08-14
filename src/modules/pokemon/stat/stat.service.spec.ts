import { Test, TestingModule } from '@nestjs/testing';
import { StatService } from './stat.service';
import { Repository } from 'typeorm';
import { Stat } from './stat.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ENTITY_STATS_FIXTURE, RESPONSE_STAT_FIXTURE } from './stat.fixture';

describe('StatService', () => {
  let service: StatService;
  let repository: Repository<Stat>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StatService,
        { provide: getRepositoryToken(Stat), useClass: Repository },
      ],
    }).compile();

    service = module.get<StatService>(StatService);
    repository = module.get<Repository<Stat>>(getRepositoryToken(Stat));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate a stat when not found in the database', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_STATS_FIXTURE[0]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_STATS_FIXTURE[1]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_STATS_FIXTURE[2]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_STATS_FIXTURE[3]);

    const result = await service.generate(RESPONSE_STAT_FIXTURE);
    expect(result).toEqual(ENTITY_STATS_FIXTURE);
  });

  it('should return a stat when found in the database', async () => {
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_STATS_FIXTURE[0]);
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_STATS_FIXTURE[1]);
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_STATS_FIXTURE[2]);
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_STATS_FIXTURE[3]);

    const result = await service.generate(RESPONSE_STAT_FIXTURE);

    expect(result).toEqual(ENTITY_STATS_FIXTURE);
  });
});
