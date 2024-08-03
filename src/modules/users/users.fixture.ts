import { Users } from './users.entity';
import { ERole, EStatus } from './users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { NEXT, PAGES, PAGINATE, TOTAL } from '../../fixtures';

const USER = {
  name: 'John Doe',
  email: 'john.doe@mail.com',
  password: '123456',
};

export const USER_INCOMPLETE: Users = {
  id: 'USER_INCOMPLETE',
  salt: 'xpto-salt',
  role: ERole.USER,
  name: 'John Doe',
  email: 'john.doe@mail.com',
  status: EStatus.INCOMPLETE,
  password: '123456',
  createdAt: undefined,
  deletedAt: undefined,
  updatedAt: undefined,
  dateOfBirth: new Date('1990-01-01'),
  recoverToken: 'xpto-recoverToken',
  confirmationToken: 'xpto-confirmationToken',
};

export const USERS_PAGINATE = {
  ...PAGINATE,
  next: NEXT,
  pages: PAGES,
  total: TOTAL,
  data: [USER_INCOMPLETE],
};

export const USER_INCOMPLETE_DTO: CreateUserDto = {
  name: USER.name,
  email: USER.email,
  password: USER.password,
  dateOfBirth: new Date('1990-01-01'),
  passwordConfirmation: USER.password,
};
