export enum ERole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
export enum EStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  INCOMPLETE = 'INCOMPLETE',
}

export enum EGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
export interface IUser {
  id: string;
  email: string;
  name: string;
  gender: EGender;
  dateOfBirth: Date;
  role: ERole;
  status: EStatus;
  password: string;
  salt: string;
  confirmationToken: string;
  recoverToken: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
