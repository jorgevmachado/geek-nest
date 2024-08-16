import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { PassportModule } from '@nestjs/passport';
import { ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER } from './pokemon.fixture';

describe('PokemonController', () => {
  let controller: PokemonController;
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      controllers: [PokemonController],
      providers: [
        {
          provide: PokemonService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be get success', async () => {
    jest
      .spyOn(service, 'findAll')
      .mockResolvedValueOnce([ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER]);
    const result = await controller.findAll({});
    expect(result).toEqual([ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER]);
  });

  it('should be get with param success', async () => {
    jest
      .spyOn(service, 'findOne')
      .mockResolvedValueOnce(ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER);
    const result = await controller.findOne(
      ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER.name,
    );
    expect(result).toEqual(ENTITY_POKEMON_COMPLETE_FIXTURE_CHARMANDER);
  });
});
