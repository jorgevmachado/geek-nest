import { IPaginate } from '@/services';
import { PAGINATE } from '@/fixtures';

import { ERole } from '@/enums/role.enum';
import { EStatus } from '@/enums/status.enum';

import { EGender } from '@/modules/auth/users/users.enum';
import { Users } from '@/modules/auth/users/users.entity';

const USER: Users = {
  id: 'eaca4c08-e62d-495a-ae1c-918199da8d52',
  cpf: '49892120450',
  salt: 'xpto-salt',
  role: ERole.USER,
  name: 'John Doe',
  email: 'john.doe@mail.com',
  status: EStatus.INCOMPLETE,
  gender: undefined,
  password: '123456',
  createdAt: new Date('2024-09-09'),
  deletedAt: undefined,
  updatedAt: undefined,
  dateOfBirth: new Date('1990-01-01'),
  recoverToken: 'xpto-recoverToken',
  confirmationToken: 'xpto-confirmationToken',
};

export const USER_INCOMPLETE_FIXTURE: Users = USER;

export const USER_COMPLETE_FIXTURE: Users = {
  ...USER,
  gender: EGender.MALE,
  createdAt: new Date('2021-01-01'),
  updatedAt: new Date('2021-01-01'),
};

export const USER_ACTIVE_FIXTURE: Users = {
  ...USER_COMPLETE_FIXTURE,
  id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
  status: EStatus.ACTIVE,
};

export const USER_ADMIN_FIXTURE: Users = {
  ...USER_COMPLETE_FIXTURE,
  role: ERole.ADMIN,
  status: EStatus.ACTIVE,
};

export const USERS_PAGINATE_FIXTURE: IPaginate<Users> = {
  ...PAGINATE,
  data: [USER_INCOMPLETE_FIXTURE],
};
