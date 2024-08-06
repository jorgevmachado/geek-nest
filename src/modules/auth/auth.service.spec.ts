import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { USER_FIXTURE, USER_INCOMPLETE_DTO } from '../users/users.fixture';
import { UnprocessableEntityException } from '@nestjs/common';
import { EStatus } from '../users/users.interface';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(),
            checkCredentials: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('must return the signUp method success.', async () => {
    jest.spyOn(userService, 'create').mockResolvedValueOnce(USER_FIXTURE);
    expect(await service.signUp(USER_INCOMPLETE_DTO)).toEqual({
      message: 'Registration Completed Successfully!',
    });
  });

  it('must return the signIn method success.', async () => {
    const user = USER_FIXTURE;
    jest.spyOn(userService, 'checkCredentials').mockResolvedValueOnce({
      id: user.id,
      cpf: user.cpf,
      role: user.role,
      salt: user.salt,
      name: user.name,
      email: user.email,
      gender: user.gender,
      status: EStatus.INCOMPLETE,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt,
      dateOfBirth: user.dateOfBirth,
      recoverToken: user.recoverToken,
      confirmationToken: user.confirmationToken,
    });
    jest.spyOn(jwtService, 'sign').mockReturnValueOnce('token');

    expect(
      await service.signIn({
        email: USER_FIXTURE.email,
        password: USER_FIXTURE.password,
      }),
    ).toEqual({ token: 'token' });
  });

  it('must return the signIn method failed.', async () => {
    jest.spyOn(userService, 'checkCredentials').mockResolvedValueOnce(null);

    await expect(
      service.signIn({
        email: USER_FIXTURE.email,
        password: USER_FIXTURE.password,
      }),
    ).rejects.toThrow(UnprocessableEntityException);
  });
});
