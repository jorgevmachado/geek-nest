import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { ENTITIES_STATS_FIXTURE } from './stat.fixture';
import { RESPONSE_STATS_FIXTURE } from '@/modules/pokemon/fixtures';
import { Stat } from './stat.entity';
import { StatService } from './stat.service';

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

  it('should return a stat when not found in the database', async () => {
    ENTITIES_STATS_FIXTURE.forEach((stat) => {
      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
      jest.spyOn(repository, 'save').mockResolvedValueOnce(stat);
    });

    const result = await service.generate(RESPONSE_STATS_FIXTURE);
    expect(result).toEqual(ENTITIES_STATS_FIXTURE);
  });

  it('should return a stat when found in the database', async () => {
    ENTITIES_STATS_FIXTURE.forEach((stat) => {
      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(stat);
    });

    const result = await service.generate(RESPONSE_STATS_FIXTURE);

    expect(result).toEqual(ENTITIES_STATS_FIXTURE);
  });
});
