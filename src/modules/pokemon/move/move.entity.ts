import { IMove } from './move.interface';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
