import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ERole } from '@/enums/role.enum';
import { EStatus } from '@/enums/status.enum';

import { EGender } from '@/modules/auth/users/users.enum';

@Entity({ name: 'users' })
export class Users {
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

  @Column({ nullable: false, unique: true, length: 11 })
  whatsUp: string;

  @Column({ nullable: true })
  picture?: string;

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
}
