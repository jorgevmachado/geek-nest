import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { EStatus } from '@/enums/status.enum';

import type { IPokeDex } from './pokedex.interface';
import { Pokemon } from '../pokemon.entity';
import { Users } from '@/modules/auth/users/users.entity';

@Entity('pokedex')
export class Pokedex implements IPokeDex {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, default: 'INACTIVE' })
  status: EStatus;

  @OneToOne(() => Users)
  @JoinColumn()
  account: Users;

  @ManyToMany(() => Pokemon, { nullable: true })
  @JoinTable()
  pokemons?: Array<Pokemon>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
