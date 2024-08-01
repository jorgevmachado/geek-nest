import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { EGender, ERole, EStatus } from './users.interface';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true, length: 200 })
  email: string;

  @Column({ nullable: false, length: 200 })
  name: string;

  @Column({ nullable: false, length: 20 })
  role: ERole;

  @Column({ nullable: false, default: 'INCOMPLETE' })
  status: EStatus;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  salt: string;

  @Column({ nullable: true, length: 64 })
  confirmationToken?: string;

  @Column({ nullable: true, length: 64 })
  recoverToken?: string;

  @Column({ nullable: true })
  dateOfBirth?: Date;

  @Column({ nullable: true })
  gender?: EGender;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
