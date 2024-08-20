import { type IPokemon } from './pokemon.interface';
import { Type } from './type/type.entity';
import { Stat } from './stat/stat.entity';
import { Move } from './move/move.entity';
import { Ability } from './ability/ability.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  Entity,
} from 'typeorm';
import { EStatus } from '@/enums/status.enum';

@Entity({ name: 'pokemons' })
export class Pokemon implements IPokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 50 })
  url: string;

  @Column({ nullable: false, length: 200 })
  name: string;

  @Column({ nullable: true, length: 200 })
  image: string;

  @ManyToMany(() => Move, { nullable: true })
  @JoinTable()
  moves?: Array<Move>;

  @Column({ nullable: false })
  order: number;

  @ManyToMany(() => Type, { nullable: true })
  @JoinTable()
  types?: Array<Type>;

  @ManyToMany(() => Stat, { nullable: true })
  @JoinTable()
  stats?: Array<Stat>;

  @Column({ nullable: false, default: 'INCOMPLETE' })
  status: EStatus;

  @Column({ nullable: true, length: 50 })
  habitat?: string;

  @Column({ nullable: true })
  is_baby?: boolean;

  @Column({ nullable: true, length: 200 })
  shape_url?: string;

  @ManyToMany(() => Ability, { nullable: true })
  @JoinTable()
  abilities?: Array<Ability>;

  @ManyToMany(() => Pokemon, { nullable: true })
  @JoinTable()
  evolutions?: Array<Pokemon>;

  @Column({ nullable: true, length: 200 })
  shape_name?: string;

  @Column({ nullable: true })
  is_mythical?: boolean;

  @Column({ nullable: true })
  gender_rate?: number;

  @Column({ nullable: true })
  is_legendary?: boolean;

  @Column({ nullable: true })
  capture_rate?: number;

  @Column({ nullable: true })
  hatch_counter?: number;

  @Column({ nullable: true })
  base_happiness?: number;

  @Column({ nullable: true, length: 200 })
  evolution_chain_url?: string;

  @Column({ nullable: true, length: 200 })
  evolves_from_species?: string;

  @Column({ nullable: true })
  has_gender_differences?: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
