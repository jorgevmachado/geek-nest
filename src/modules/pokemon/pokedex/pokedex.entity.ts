import {
  Entity,
  OneToOne,
  JoinTable,
  ManyToMany,
  JoinColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import type { IPokeDex } from './pokedex.interface';
import { Users } from '../../users/users.entity';
import { Pokemon } from '../pokemon.entity';
import { EStatus } from '@/enums/status.enum';

@Entity('pokedex')
export class Pokedex implements IPokeDex {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, default: 'INACTIVE' })
  status: EStatus;

  @OneToOne(() => Users)
  @JoinColumn()
  account: Users;

  @ManyToMany(() => Pokemon)
  @JoinTable()
  pokemons: Array<Pokemon>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
