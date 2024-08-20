import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import * as bcrypt from 'bcrypt';
import { EGender, ERole } from '@/modules/users/users.enum';

import type { IUser } from './users.interface';

import { EStatus } from '@/enums/status.enum';

@Entity({ name: 'users' })
export class Users implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true, length: 11 })
  cpf: string;

  @Column({ nullable: false, length: 20 })
  role: ERole;

  @Column({ nullable: false })
  salt: string;

  @Column({ nullable: false, length: 200 })
  name: string;

  @Column({ nullable: false, unique: true, length: 200 })
  email: string;

  @Column({ nullable: true })
  gender?: EGender;

  @Column({ nullable: false, default: 'INCOMPLETE' })
  status: EStatus;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ nullable: false })
  dateOfBirth?: Date;

  @Column({ nullable: true, length: 64 })
  recoverToken?: string;

  @Column({ nullable: true, length: 64 })
  confirmationToken?: string;

  async validatePassword?(password: string) {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
