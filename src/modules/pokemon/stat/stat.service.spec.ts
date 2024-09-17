import { Test, TestingModule } from '@nestjs/testing';

import { RESPONSE_STATS_FIXTURE } from '@/modules/pokemon/fixtures';
import { STAT_FIXTURE } from '@/modules/pokemon/stat/stat.fixture';

import { StatService } from './stat.service';

describe('StatService', () => {
  let service: StatService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatService],
    }).compile();

    service = module.get<StatService>(StatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a stat when found in the database', async () => {
    const result = service.generate(RESPONSE_STATS_FIXTURE);

    expect(result).toEqual(STAT_FIXTURE);
  });
});
