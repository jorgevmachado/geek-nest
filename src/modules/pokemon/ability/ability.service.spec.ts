import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { AbilityService } from './ability.service';

import { Ability } from './ability.entity';

import { ENTITIES_ABILITIES_FIXTURE } from './ability.fixture';
import { RESPONSE_ABILITIES_FIXTURE } from '@/modules/pokemon/fixtures';

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
    expect(repository).toBeDefined();
  });

  it('should return ability when not found in the database', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);

    ENTITIES_ABILITIES_FIXTURE.forEach((ability) => {
      jest.spyOn(repository, 'save').mockResolvedValueOnce(ability);
    });

    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);

    const result = await service.generate(RESPONSE_ABILITIES_FIXTURE);
    expect(result).toEqual(ENTITIES_ABILITIES_FIXTURE);
  });

  it('should return a ability when found in the database', async () => {
    ENTITIES_ABILITIES_FIXTURE.forEach((ability) => {
      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(ability);
    });

    const result = await service.generate(RESPONSE_ABILITIES_FIXTURE);

    expect(result).toEqual(ENTITIES_ABILITIES_FIXTURE);
  });
});
