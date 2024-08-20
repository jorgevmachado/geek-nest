import { Users } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { NEXT, PAGES, PAGINATE, TOTAL } from '@/fixtures';
import { EStatus } from '@/enums/status.enum';
import { ERole } from '@/modules/users/users.enum';

export const usersClean = (users: Array<Users>) => {
  return users.map((user) => userClean(user));
};

export const userClean = (user: Users) => {
  return {
    id: user.id,
    cpf: user.cpf,
    role: user.role,
    name: user.name,
    email: user.email,
    status: user.status,
    ...(user.status !== EStatus.INCOMPLETE && {
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
    }),
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    ...(user.deletedAt && { deletedAt: user.deletedAt }),
  };
};

export const USER_DATE_OF_BIRTH = '1990-01-01';
const USER = {
  cpf: '44217458800',
  name: 'John Doe',
  email: 'john.doe@mail.com',
  password: '123456',
  dateOfBirth: new Date(USER_DATE_OF_BIRTH),
};

export const USER_FIXTURE: Users = {
  id: 'USER_INCOMPLETE',
  cpf: USER.cpf,
  salt: 'xpto-salt',
  role: ERole.USER,
  name: USER.name,
  email: USER.email,
  status: EStatus.INCOMPLETE,
  password: '123456',
  createdAt: undefined,
  deletedAt: undefined,
  updatedAt: undefined,
  dateOfBirth: USER.dateOfBirth,
  recoverToken: 'xpto-recoverToken',
  confirmationToken: 'xpto-confirmationToken',
};

export const USER_COMPLETE_FIXTURE: Users = {
  ...USER_FIXTURE,
  id: 'USER_COMPLETE',
  status: EStatus.COMPLETE,
};

export const USERS_PAGINATE = {
  ...PAGINATE,
  next: NEXT,
  pages: PAGES,
  total: TOTAL,
  data: [USER_FIXTURE],
};

export const USER_INCOMPLETE_DTO: CreateUserDto = {
  cpf: USER.cpf,
  name: USER.name,
  email: USER.email,
  password: USER.password,
  dateOfBirth: new Date('1990-01-01'),
  passwordConfirmation: USER.password,
};
