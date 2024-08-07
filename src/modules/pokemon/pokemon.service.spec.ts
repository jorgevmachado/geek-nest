import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeService } from './type/type.service';
import { MoveService } from './move/move.service';
import { StatService } from './stat/stat.service';
import { AbilityService } from './ability/ability.service';
import { Type } from './type/type.entity';
import { Stat } from './stat/stat.entity';
import { Move } from './move/move.entity';
import { Ability } from './ability/ability.entity';
import { POKEMONS_INCOMPLETE_FIXTURE } from './pokemon.fixture';
import { EStatus } from './pokemon.interface';

describe('PokemonService', () => {
  let service: PokemonService;
  let repository: Repository<Pokemon>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        { provide: getRepositoryToken(Pokemon), useClass: Repository },
        { provide: getRepositoryToken(Type), useClass: Repository },
        { provide: getRepositoryToken(Stat), useClass: Repository },
        { provide: getRepositoryToken(Move), useClass: Repository },
        { provide: getRepositoryToken(Ability), useClass: Repository },
        {
          provide: TypeService,
          useValue: {
            generate: jest.fn(),
          },
        },
        {
          provide: MoveService,
          useValue: {
            generate: jest.fn(),
          },
        },
        {
          provide: StatService,
          useValue: {
            generate: jest.fn(),
          },
        },
        {
          provide: AbilityService,
          useValue: {
            generate: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    repository = module.get<Repository<Pokemon>>(getRepositoryToken(Pokemon));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('must return the findAll method with database full.', async () => {
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);
    jest
      .spyOn(repository, 'find')
      .mockResolvedValueOnce(POKEMONS_INCOMPLETE_FIXTURE);

    expect(await service.findAll({})).toEqual(POKEMONS_INCOMPLETE_FIXTURE);
  });

  it('must return the findOne method with param name in database pokemon complete.', async () => {
    const pokemon = {
      ...POKEMONS_INCOMPLETE_FIXTURE[0],
      status: EStatus.COMPLETE,
    };
    jest.spyOn(repository, 'count').mockResolvedValueOnce(1302);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(pokemon);

    expect(await service.findOne(pokemon.name)).toEqual(pokemon);
  });
});
