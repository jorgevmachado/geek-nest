import { InternalServerErrorException } from '@nestjs/common';
import { PokemonApi } from './pokemon.api';

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
});
