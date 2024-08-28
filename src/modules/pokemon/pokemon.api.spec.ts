import { InternalServerErrorException } from '@nestjs/common';
import { PokemonApi } from './pokemon.api';
import { RESPONSE_EVOLUTION_FIXTURE } from '@/modules/pokemon/fixtures';

describe('PokemonApi', () => {
  let pokemonApi: PokemonApi;

  beforeEach(() => {
    pokemonApi = new PokemonApi();
  });

  it('should return all Pokémons when GET request is successful', async () => {
    const response = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      ],
    };
    jest.spyOn(pokemonApi, 'get').mockResolvedValueOnce(response);

    const result = await pokemonApi.getAll(0, 10);
    expect(result.results).toEqual([
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
        order: 1,
      },
    ]);
  });

  it('should throw error when GET request fails in getAll', async () => {
    jest.spyOn(pokemonApi, 'get').mockRejectedValueOnce(new Error('GET error'));

    await expect(pokemonApi.getAll(0, 10)).rejects.toThrow(
      InternalServerErrorException,
    );
  });

  it('should return Pokémon by name when GET request is successful', async () => {
    const response = {
      name: 'bulbasaur',
      types: [],
      moves: [],
      stats: [],
      abilities: [],
    };
    jest.spyOn(pokemonApi, 'get').mockResolvedValueOnce(response);

    const result = await pokemonApi.getByName('bulbasaur');
    expect(result).toEqual(response);
  });

  it('should throw error when GET request fails in getByName', async () => {
    jest.spyOn(pokemonApi, 'get').mockRejectedValueOnce(new Error('GET error'));

    await expect(pokemonApi.getByName('bulbasaur')).rejects.toThrow(
      InternalServerErrorException,
    );
  });

  it('should return Pokémon species by name when GET request is successful', async () => {
    const response = { name: 'bulbasaur' };
    jest.spyOn(pokemonApi, 'get').mockResolvedValueOnce(response);

    const result = await pokemonApi.getSpecieByName('bulbasaur');
    expect(result).toEqual(response);
  });

  it('should throw error when GET request fails in getSpecieByName', async () => {
    jest.spyOn(pokemonApi, 'get').mockRejectedValueOnce(new Error('GET error'));

    await expect(pokemonApi.getSpecieByName('bulbasaur')).rejects.toThrow(
      InternalServerErrorException,
    );
  });

  it('should return Pokémon evolution chain by url when GET request is successful', async () => {
    jest
      .spyOn(pokemonApi, 'get')
      .mockResolvedValueOnce(RESPONSE_EVOLUTION_FIXTURE);

    const result = await pokemonApi.getEvolutions(
      'https://pokeapi.co/api/v2/pokemon-species/1/',
    );

    expect(result).toEqual(RESPONSE_EVOLUTION_FIXTURE);
  });

  it('should throw error when GET request fails in getEvolutions', async () => {
    jest.spyOn(pokemonApi, 'get').mockRejectedValueOnce(new Error('GET error'));

    await expect(
      pokemonApi.getEvolutions('https://pokeapi.co/api/v2/pokemon-species/1/'),
    ).rejects.toThrow(InternalServerErrorException);
  });
});
