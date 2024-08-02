import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { USER_INCOMPLETE, USER_INCOMPLETE_DTO } from '../users/users.fixture';
import { UnprocessableEntityException } from '@nestjs/common';

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
    jest.spyOn(userService, 'create').mockResolvedValueOnce(USER_INCOMPLETE);
    expect(await service.signUp(USER_INCOMPLETE_DTO)).toEqual({
      message: 'Registration Completed Successfully!',
    });
  });

  it('must return the signIn method success.', async () => {
    const user = USER_INCOMPLETE;
    jest.spyOn(userService, 'checkCredentials').mockResolvedValueOnce({
      id: user.id,
      salt: user.salt,
      role: user.role,
      name: user.name,
      email: user.email,
      status: user.status,
      password: user.password,
      createdAt: user.createdAt,
      deletedAt: user.deletedAt,
      updatedAt: user.updatedAt,
      recoverToken: user.recoverToken,
      confirmationToken: user.confirmationToken,
      ...(user.dateOfBirth && { dateOfBirth: user.dateOfBirth }),
      ...(user.gender && { gender: user.gender }),
    });
    jest.spyOn(jwtService, 'sign').mockReturnValueOnce('token');

    expect(
      await service.signIn({
        email: USER_INCOMPLETE.email,
        password: USER_INCOMPLETE.password,
      }),
    ).toEqual({ token: 'token' });
  });

  it('must return the signIn method failed.', async () => {
    jest.spyOn(userService, 'checkCredentials').mockResolvedValueOnce(null);

    await expect(
      service.signIn({
        email: USER_INCOMPLETE.email,
        password: USER_INCOMPLETE.password,
      }),
    ).rejects.toThrow(UnprocessableEntityException);
  });
});
