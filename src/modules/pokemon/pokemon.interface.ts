import { EStatus } from '@/enums/status.enum';

import { Ability } from './ability/ability.entity';
import { Move } from './move/move.entity';
import { Pokemon } from './pokemon.entity';
import { Type } from './type/type.entity';

export interface IResponsePaginate<T> {
  next: string | null;
  count: number;
  results: Array<T>;
  previous: string | null;
}

export interface IResponsePokemon {
  url: string;
  name: string;
  order: number;
}

interface IResponseSpritesUrl {
  back_gray?: string;
  front_gray?: string;
  back_shiny?: string;
  front_shiny?: string;
  back_female?: string;
  front_female?: string;
  back_default?: string;
  front_default?: string;
  back_transparent?: string;
  front_transparent?: string;
  back_shiny_female?: string;
  front_shiny_female?: string;
  back_shiny_transparent?: string;
  front_shiny_transparent?: string;
}

export interface IResponsePokemonByName {
  id: number;
  name: string;
  order: number;
  cries: {
    latest: string;
    legacy: string;
  };
  moves: Array<{
    move: Pick<IResponsePokemon, 'url' | 'name'>;
    order: number;
    version_group_details: Array<{
      version_group: Pick<IResponsePokemon, 'url' | 'name'>;
      level_learned_at: number;
      move_learn_method: Pick<IResponsePokemon, 'url' | 'name'>;
    }>;
  }>;
  forms: Array<Pick<IResponsePokemon, 'url' | 'name'>>;
  stats: Array<{
    stat: Pick<IResponsePokemon, 'url' | 'name'>;
    order: number;
    effort: number;
    base_stat: number;
  }>;
  types: Array<{
    slot: number;
    type: Pick<IResponsePokemon, 'url' | 'name'>;
    order: number;
  }>;
  weight: number;
  height: number;
  species: Pick<IResponsePokemon, 'url' | 'name'>;
  sprites?: {
    other: {
      home: IResponseSpritesUrl;
      showdown: IResponseSpritesUrl;
      dream_world: IResponseSpritesUrl;
      'official-artwork': IResponseSpritesUrl;
    };
    versions: {
      'generation-i': {
        'red-blue': IResponseSpritesUrl;
        yellow: IResponseSpritesUrl;
      };
      'generation-ii': {
        crystal: IResponseSpritesUrl;
        gold: IResponseSpritesUrl;
        silver: IResponseSpritesUrl;
      };
      'generation-iii': {
        emerald: IResponseSpritesUrl;
        'ruby-sapphire': IResponseSpritesUrl;
        'firered-leafgreen': IResponseSpritesUrl;
      };
      'generation-iv': {
        platinum: IResponseSpritesUrl;
        'diamond-pearl': IResponseSpritesUrl;
        'heartgold-soulsilver': IResponseSpritesUrl;
      };
      'generation-v': {
        'black-white': {
          animated: IResponseSpritesUrl;
          back_shiny: string;
          front_shiny: string;
          back_female: string;
          front_female: string;
          back_default: string;
          front_default: string;
          back_shiny_female: string;
          front_shiny_female: string;
        };
      };
      'generation-vi': {
        'x-y': IResponseSpritesUrl;
        'omegaruby-alphasapphire': IResponseSpritesUrl;
      };
      'generation-vii': {
        icons: IResponseSpritesUrl;
        'ultra-sun-ultra-moon': IResponseSpritesUrl;
      };
      'generation-viii': {
        icons: IResponseSpritesUrl;
      };
    };
    back_shiny: string;
    front_shiny: string;
    back_female: string;
    front_female: string;
    back_default: string;
    front_default: string;
    back_shiny_female: string;
    front_shiny_female: string;
  };
  abilities: Array<{
    slot: number;
    order: number;
    ability: Pick<IResponsePokemon, 'url' | 'name'>;
    is_hidden: boolean;
  }>;
  is_default: boolean;
  past_types: Array<any>;
  held_items: Array<any>;
  game_indices: Array<{
    version: Pick<IResponsePokemon, 'url' | 'name'>;
    game_index: number;
  }>;
  past_abilities: Array<any>;
  base_experience: number;
  location_area_encounters: string;
}

export interface IResponsePokemonSpecie {
  id: number;
  name: string;
  order: number;
  names: Array<{
    name: string;
    language: Pick<IResponsePokemon, 'url' | 'name'>;
  }>;
  color: Pick<IResponsePokemon, 'url' | 'name'>;
  shape: Pick<IResponsePokemon, 'url' | 'name'>;
  genera: Array<{
    genus: string;
    language: Pick<IResponsePokemon, 'url' | 'name'>;
  }>;
  habitat: Pick<IResponsePokemon, 'url' | 'name'>;
  is_baby: boolean;
  varieties: Array<{
    pokemon: Pick<IResponsePokemon, 'url' | 'name'>;
    is_default: boolean;
  }>;
  egg_groups: Array<Pick<IResponsePokemon, 'url' | 'name'>>;
  generation: Pick<IResponsePokemon, 'url' | 'name'>;
  growth_rate: Pick<IResponsePokemon, 'url' | 'name'>;
  gender_rate: number;
  is_mythical: boolean;
  is_legendary: boolean;
  capture_rate: number;
  hatch_counter: number;
  base_happiness: number;
  evolution_chain: Pick<IResponsePokemon, 'url'>;
  pokedex_numbers: Array<{
    pokedex: Pick<IResponsePokemon, 'url' | 'name'>;
    entry_number: number;
  }>;
  forms_switchable: boolean;
  form_descriptions: Array<any>;
  pal_park_encounters: Array<{
    area: Pick<IResponsePokemon, 'url' | 'name'>;
    rate: number;
    base_score: number;
  }>;
  flavor_text_entries: Array<{
    version: Pick<IResponsePokemon, 'url' | 'name'>;
    language: Pick<IResponsePokemon, 'url' | 'name'>;
    flavor_text: string;
  }>;
  evolves_from_species: any;
  has_gender_differences: boolean;
}

export interface IResponsePokemonFull {
  id: string;
  url: IResponsePokemon['url'];
  name: IResponsePokemonByName['name'];
  order: IResponsePokemon['order'];
  image: string;
  types: IResponsePokemonByName['types'];
  stats: IResponsePokemonByName['stats'];
  moves: IResponsePokemonByName['moves'];
  habitat: IResponsePokemonSpecie['habitat']['name'];
  is_baby: IResponsePokemonSpecie['is_baby'];
  shape_url: IResponsePokemonSpecie['shape']['url'];
  abilities: IResponsePokemonByName['abilities'];
  shape_name: IResponsePokemonSpecie['shape']['name'];
  is_mythical: IResponsePokemonSpecie['is_mythical'];
  gender_rate: IResponsePokemonSpecie['gender_rate'];
  is_legendary: IResponsePokemonSpecie['is_legendary'];
  capture_rate: IResponsePokemonSpecie['capture_rate'];
  hatch_counter: IResponsePokemonSpecie['hatch_counter'];
  base_happiness: IResponsePokemonSpecie['base_happiness'];
  evolution_chain_url: IResponsePokemonSpecie['evolution_chain']['url'];
  evolves_from_species: IResponsePokemonSpecie['evolves_from_species'];
  has_gender_differences: IResponsePokemonSpecie['has_gender_differences'];
}

export interface IResponseEvolutionDetail {
  item: any;
  gender: any;
  trigger: Pick<IResponsePokemon, 'url' | 'name'>;
  location: any;
  min_level: number;
  held_item: any;
  known_move: any;
  min_beauty: any;
  party_type: any;
  time_of_day: '';
  min_affection: any;
  min_happiness: any;
  party_species: any;
  trade_species: any;
  known_move_type: any;
  turn_upside_down: boolean;
  needs_overworld_rain: boolean;
  relative_physical_stats: any;
}

export interface IResponseEvolution {
  id: number;
  chain: {
    is_baby: boolean;
    species: Pick<IResponsePokemon, 'url' | 'name'>;
    evolves_to: Array<{
      is_baby: boolean;
      species: Pick<IResponsePokemon, 'url' | 'name'>;
      evolves_to: Array<{
        is_baby: boolean;
        species: Pick<IResponsePokemon, 'url' | 'name'>;
        evolves_to: Array<any>;
        evolution_details: Array<IResponseEvolutionDetail>;
      }>;
      evolution_details: Array<IResponseEvolutionDetail>;
    }>;
    evolution_details: Array<IResponseEvolutionDetail>;
  };
  baby_trigger_item: any;
}

export interface IPokemonXPTO {
  id: string;
  url: string;
  name?: string;
  image?: string;
  moves?: Array<Move>;
  order: number;
  types?: Array<Type>;
  status: EStatus;
  habitat?: string;
  is_baby?: boolean;
  shape_url?: string;
  abilities?: Array<Ability>;
  evolutions?: Array<Pokemon>;
  shape_name?: string;
  is_mythical?: boolean;
  gender_rate?: number;
  is_legendary?: boolean;
  capture_rate?: number;
  hatch_counter?: number;
  base_happiness?: number;
  evolution_chain_url?: string;
  evolves_from_species?: string;
  has_gender_differences?: boolean;
}
