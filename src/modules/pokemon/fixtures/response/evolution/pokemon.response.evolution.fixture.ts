import type { IResponseEvolution } from '@/modules/pokemon/pokemon.interface';

export const RESPONSE_EVOLUTION_FIXTURE: IResponseEvolution = {
  id: 1,
  chain: {
    is_baby: false,
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
    evolves_to: [
      {
        is_baby: false,
        species: {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
        },
        evolves_to: [
          {
            evolution_details: [
              {
                gender: null,
                held_item: null,
                item: null,
                known_move: null,
                known_move_type: null,
                location: null,
                min_affection: null,
                min_beauty: null,
                min_happiness: null,
                min_level: 32,
                needs_overworld_rain: false,
                party_species: null,
                party_type: null,
                relative_physical_stats: null,
                time_of_day: '',
                trade_species: null,
                trigger: {
                  name: 'level-up',
                  url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
                },
                turn_upside_down: false,
              },
            ],
            evolves_to: [],
            is_baby: false,
            species: {
              name: 'venusaur',
              url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
            },
          },
        ],
        evolution_details: [
          {
            item: null,
            gender: null,
            trigger: {
              url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
              name: 'level-up',
            },
            location: null,
            min_level: 16,
            held_item: null,
            known_move: null,
            min_beauty: null,
            party_type: null,
            time_of_day: '',
            min_affection: null,
            min_happiness: null,
            party_species: null,
            trade_species: null,
            known_move_type: null,
            turn_upside_down: false,
            needs_overworld_rain: false,
            relative_physical_stats: null,
          },
        ],
      },
    ],
    evolution_details: [],
  },
  baby_trigger_item: null,
};
