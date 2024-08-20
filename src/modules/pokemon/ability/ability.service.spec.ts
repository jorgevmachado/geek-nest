import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { AbilityService } from './ability.service';

import { Ability } from './ability.entity';

import {
  ENTITY_ABILITIES_FIXTURE,
  RESPONSE_ABILITY_FIXTURE,
} from './ability.fixture';

describe('AbilityService', () => {
  let service: AbilityService;
  let repository: Repository<Ability>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AbilityService,
        { provide: getRepositoryToken(Ability), useClass: Repository },
      ],
    }).compile();

    service = module.get<AbilityService>(AbilityService);
    repository = module.get<Repository<Ability>>(getRepositoryToken(Ability));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate a ability when not found in the database', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_ABILITIES_FIXTURE[0]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_ABILITIES_FIXTURE[1]);
    const result = await service.generate(RESPONSE_ABILITY_FIXTURE);
    expect(result).toEqual(ENTITY_ABILITIES_FIXTURE);
  });

  it('should return a ability when found in the database', async () => {
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_ABILITIES_FIXTURE[0]);
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_ABILITIES_FIXTURE[1]);

    const result = await service.generate(RESPONSE_ABILITY_FIXTURE);

    expect(result).toEqual(ENTITY_ABILITIES_FIXTURE);
  });
});
