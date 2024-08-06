import { Users } from './users.entity';
import { ERole, EStatus } from './users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { NEXT, PAGES, PAGINATE, TOTAL } from '../../fixtures';

const USER = {
  cpf: '44217458800',
  name: 'John Doe',
  email: 'john.doe@mail.com',
  password: '123456',
  dateOfBirth: new Date('1990-01-01'),
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
