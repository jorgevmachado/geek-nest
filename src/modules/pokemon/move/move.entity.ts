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

  @Column({ nullable: false, length: 200 })
  url: string;

  @Column({ nullable: false, length: 200 })
  name: string;

  @Column({ nullable: false })
  order: number;

  // pp: number;
  // type: string;
  // power: number;
  // target: string;
  // effect: string;
  // priority: number;
  // accuracy: number;
  // short_effect: string;
  // damage_class: string;
  // effect_chance: number;
  // learned_by_pokemon: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
