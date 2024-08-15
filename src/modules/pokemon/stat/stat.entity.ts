import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IStat } from './stat.interface';

@Entity({ name: 'stats' })
export class Stat implements IStat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 200 })
  url: string;

  @Column({ nullable: false, length: 200 })
  name: string;

  @Column({ nullable: false })
  order: number;

  @Column({ nullable: false })
  effort: number;

  @Column({ nullable: false })
  base_stat: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
