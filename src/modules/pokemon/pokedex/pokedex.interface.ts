import { Pokemon } from '../pokemon.entity';
import { Users } from '@/modules/auth/users/users.entity';

export interface IPokeDex {
  account: Users;
  pokemons?: Array<Pokemon>;
}
