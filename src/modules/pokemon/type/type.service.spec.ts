import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ENTITIES_TYPES_FIXTURE } from './type.fixture';
import { RESPONSE_TYPES_FIXTURE } from '@/modules/pokemon/fixtures';
import { Type } from './type.entity';
import { TypeService } from './type.service';

describe('TypeService', () => {
  let service: TypeService;
  let repository: Repository<Type>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TypeService,
        { provide: getRepositoryToken(Type), useClass: Repository },
      ],
    }).compile();

    service = module.get<TypeService>(TypeService);
    repository = module.get<Repository<Type>>(getRepositoryToken(Type));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a type when not found in the database', async () => {
    ENTITIES_TYPES_FIXTURE.forEach((type) => {
      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
      jest.spyOn(repository, 'save').mockResolvedValueOnce(type);
    });

    const result = await service.generate(RESPONSE_TYPES_FIXTURE);
    expect(result).toEqual(ENTITIES_TYPES_FIXTURE);
  });

  it('should return a type when found in the database', async () => {
    ENTITIES_TYPES_FIXTURE.forEach((type) => {
      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(type);
    });
    const result = await service.generate(RESPONSE_TYPES_FIXTURE);

    expect(result).toEqual(ENTITIES_TYPES_FIXTURE);
  });
});
