import { Injectable } from '@nestjs/common';

import { EStatus } from '@/enums/status.enum';

import type { IResponseEvolution } from '@/modules/pokemon/pokemon.interface';
import { Pokemon } from '@/modules/pokemon/pokemon.entity';
import { PokemonApi } from '@/modules/pokemon/pokemon.api';

@Injectable()
export class EvolutionsService {
  constructor(protected pokemonApi: PokemonApi) {}

  async generate(url: string) {
    const response = await this.pokemonApi.getEvolutions(url);

    if (!response) {
      return [];
    }

    const name = response.chain.species.name;

    const evolvesToList = [
      name,
      ...this.nextEvolution(response.chain.evolves_to),
    ];

    const evolvesToListFiltered = evolvesToList.filter(
      (item) => item !== undefined,
    );

    if (!evolvesToListFiltered.length) {
      return [];
    }

    return evolvesToListFiltered.map((item) => {
      const pokemon = new Pokemon();
      pokemon.name = item;
      pokemon.status = EStatus.INACTIVE;
      return pokemon;
    });
  }

  private nextEvolution(evolvesTo: IResponseEvolution['chain']['evolves_to']) {
    return evolvesTo
      .map((item) =>
        [item.species.name].concat(...this.nextEvolution(item.evolves_to)),
      )
      .reduce((arr, curr) => [...arr, ...curr], []);
  }
}
