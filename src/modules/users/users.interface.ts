import { EStatus } from '@/enums/status.enum';
import { EGender, ERole } from '@/modules/users/users.enum';

export interface IUser {
  id: string;
  cpf: string;
  role: ERole;
  salt: string;
  name: string;
  email: string;
  gender?: EGender;
  status: EStatus;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  dateOfBirth?: Date;
  recoverToken?: string;
  confirmationToken?: string;
}
