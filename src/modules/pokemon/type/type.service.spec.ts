import { Test, TestingModule } from '@nestjs/testing';
import { TypeService } from './type.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from './type.entity';
import { ENTITY_TYPES_FIXTURE, RESPONSE_TYPE_FIXTURE } from './type.fixture';

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

  it('should generate a type when not found in the database', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_TYPES_FIXTURE[0]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(ENTITY_TYPES_FIXTURE[1]);
    const result = await service.generate(RESPONSE_TYPE_FIXTURE);
    expect(result).toEqual(ENTITY_TYPES_FIXTURE);
  });

  it('should return a type when found in the database', async () => {
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_TYPES_FIXTURE[0]);
    jest
      .spyOn(repository, 'findOne')
      .mockResolvedValueOnce(ENTITY_TYPES_FIXTURE[1]);

    const result = await service.generate(RESPONSE_TYPE_FIXTURE);

    expect(result).toEqual(ENTITY_TYPES_FIXTURE);
  });
});
