import { Users } from '../../users/users.entity';
import { Pokemon } from '../pokemon.entity';

export interface IPokeDex {
  account: Users;
  pokemons: Array<Pokemon>;
}
