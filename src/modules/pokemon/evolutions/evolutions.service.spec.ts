import { Test, TestingModule } from '@nestjs/testing';

import { EStatus } from '@/enums/status.enum';
import { EvolutionsService } from './evolutions.service';
import { Pokemon } from '@/modules/pokemon/pokemon.entity';
import { PokemonApi } from '@/modules/pokemon/pokemon.api';
import { RESPONSE_EVOLUTION_FIXTURE } from '@/modules/pokemon/fixtures';

describe('EvolutionsService', () => {
  let service: EvolutionsService;
  let pokemonApi: PokemonApi;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EvolutionsService,
        {
          provide: PokemonApi,
          useValue: {
            getAll: jest.fn(),
            getByName: jest.fn(),
            getEvolutions: jest.fn(),
            getSpecieByName: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<EvolutionsService>(EvolutionsService);
    pokemonApi = module.get<PokemonApi>(PokemonApi);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(pokemonApi).toBeDefined();
  });

  it('should return an empty list of evolutions because service broke', async () => {
    const result = await service.generate(
      'https://pokeapi.co/api/v2/evolution-chain/1/',
    );

    expect(result).toEqual([]);
  });

  it('should return a list of evolutions pokemon', async () => {
    const evolutionBulbasaur = new Pokemon();
    evolutionBulbasaur.name = 'bulbasaur';
    evolutionBulbasaur.status = EStatus.INACTIVE;

    const evolutionIvysaur = new Pokemon();
    evolutionIvysaur.name = 'ivysaur';
    evolutionIvysaur.status = EStatus.INACTIVE;

    const evolutionVenusaur = new Pokemon();
    evolutionVenusaur.name = 'venusaur';
    evolutionVenusaur.status = EStatus.INACTIVE;

    jest
      .spyOn(pokemonApi, 'getEvolutions')
      .mockResolvedValueOnce(RESPONSE_EVOLUTION_FIXTURE);

    const result = await service.generate(
      'https://pokeapi.co/api/v2/evolution-chain/1/',
    );

    expect(result).toEqual([
      evolutionBulbasaur,
      evolutionIvysaur,
      evolutionVenusaur,
    ]);
  });

  it('should return a list of evolutions pokemon empty', async () => {
    const evolutionBulbasaur = new Pokemon();
    evolutionBulbasaur.name = 'bulbasaur';
    evolutionBulbasaur.status = EStatus.INACTIVE;

    const evolutionIvysaur = new Pokemon();
    evolutionIvysaur.name = 'ivysaur';
    evolutionIvysaur.status = EStatus.INACTIVE;

    const evolutionVenusaur = new Pokemon();
    evolutionVenusaur.name = 'venusaur';
    evolutionVenusaur.status = EStatus.INACTIVE;

    jest.spyOn(pokemonApi, 'getEvolutions').mockResolvedValueOnce({
      ...RESPONSE_EVOLUTION_FIXTURE,
      chain: {
        ...RESPONSE_EVOLUTION_FIXTURE.chain,
        species: {
          url: '',
          name: undefined,
        },
        evolves_to: [],
      },
    });

    const result = await service.generate(
      'https://pokeapi.co/api/v2/evolution-chain/1/',
    );

    expect(result).toEqual([]);
  });
});
