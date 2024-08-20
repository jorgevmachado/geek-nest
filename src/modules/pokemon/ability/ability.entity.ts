import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import type { IAbility } from './ability.interface';

@Entity({ name: 'abilities' })
export class Ability implements IAbility {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 50 })
  url: string;

  @Column({ nullable: false, length: 200 })
  name: string;

  @Column({ nullable: false })
  slot: number;

  @Column({ nullable: false })
  order: number;

  @Column({ nullable: false })
  is_hidden: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
