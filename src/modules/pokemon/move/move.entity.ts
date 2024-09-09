import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import type { IMove } from './move.interface';

@Entity({ name: 'moves' })
export class Move implements IMove {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  pp: number;

  @Column({ nullable: false, length: 200 })
  url: string;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false, length: 200 })
  name: string;

  @Column({ nullable: false })
  order: number;

  @Column({ nullable: true })
  power: number;

  @Column({ nullable: false })
  target: string;

  @Column({ nullable: false })
  effect: string;

  @Column({ nullable: false })
  priority: number;

  @Column({ nullable: true })
  accuracy: number;

  @Column({ nullable: false })
  short_effect: string;

  @Column({ nullable: false })
  damage_class: string;

  @Column({ nullable: true })
  effect_chance?: number;

  @Column({ nullable: false })
  learned_by_pokemon: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  pokemons?: Array<string>;
}
