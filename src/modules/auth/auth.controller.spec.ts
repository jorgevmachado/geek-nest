import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { USER_FIXTURE } from '../users/users.fixture';
import { UsersService } from '../users/users.service';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      controllers: [AuthController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(),
            checkCredentials: jest.fn(),
          },
        },
        {
          provide: AuthService,
          useValue: {
            signUp: jest.fn(),
            signIn: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be post signUp success', async () => {
    const response = { message: 'Registration Completed Successfully!' };
    const createAuthDto: CreateUserDto = {
      cpf: USER_FIXTURE.cpf,
      name: USER_FIXTURE.name,
      email: USER_FIXTURE.email,
      password: USER_FIXTURE.password,
      passwordConfirmation: USER_FIXTURE.password,
      dateOfBirth: USER_FIXTURE.dateOfBirth,
    };
    jest.spyOn(service, 'signUp').mockResolvedValueOnce(response);
    expect(await controller.signUp(createAuthDto)).toEqual(response);
  });

  it('should be post signUp error empty body', async () => {
    expect(
      await controller.signUp({
        cpf: '',
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        dateOfBirth: undefined,
      }),
    ).toEqual(undefined);
  });

  it('should be post signIn success', async () => {
    const response = { token: 'token' };
    jest.spyOn(service, 'signIn').mockResolvedValueOnce(response);
    expect(
      await controller.signIn({
        email: USER_FIXTURE.email,
        password: USER_FIXTURE.password,
      }),
    ).toEqual(response);
  });

  it('should be post signIn error', async () => {
    jest.spyOn(userService, 'checkCredentials').mockResolvedValueOnce(null);
    expect(
      await controller.signIn({
        email: USER_FIXTURE.email,
        password: USER_FIXTURE.password,
      }),
    ).toBeUndefined();
  });

  it('should be get me success', async () => {
    expect(controller.getMe(USER_FIXTURE)).toEqual(USER_FIXTURE);
  });
});
