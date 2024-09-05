import {
  BadRequestException,
  ForbiddenException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';

import { ERole } from '@/enums/role.enum';
import { EStatus } from '@/enums/status.enum';

import {
  USER_ACTIVE_FIXTURE,
  USER_ADMIN_FIXTURE,
  USER_COMPLETE_FIXTURE,
  USER_INCOMPLETE_FIXTURE,
} from './users/users.fixture';
import { UsersService } from './users/users.service';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UsersService;

  const findOneResponse = {
    id: USER_INCOMPLETE_FIXTURE.id,
    cpf: USER_INCOMPLETE_FIXTURE.cpf,
    role: USER_INCOMPLETE_FIXTURE.role,
    gender: undefined,
    name: USER_INCOMPLETE_FIXTURE.name,
    email: USER_INCOMPLETE_FIXTURE.email,
    status: USER_INCOMPLETE_FIXTURE.status,
    createdAt: USER_INCOMPLETE_FIXTURE.createdAt,
    updatedAt: USER_INCOMPLETE_FIXTURE.updatedAt,
    deletedAt: new Date('2024-01-01'),
    dateOfBirth: undefined,
  };

  const findAllResponse = [findOneResponse];

  const removeResponse = {
    message:
      'User with id eaca4c08-e62d-495a-ae1c-918199da8d52 successfully removed',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            create: jest.fn().mockResolvedValueOnce({
              id: USER_INCOMPLETE_FIXTURE.id,
              cpf: USER_INCOMPLETE_FIXTURE.cpf,
              role: USER_INCOMPLETE_FIXTURE.role,
              name: USER_INCOMPLETE_FIXTURE.name,
              gender: undefined,
              email: USER_INCOMPLETE_FIXTURE.email,
              status: USER_INCOMPLETE_FIXTURE.status,
              createdAt: USER_INCOMPLETE_FIXTURE.createdAt,
              updatedAt: USER_INCOMPLETE_FIXTURE.updatedAt,
              deletedAt: undefined,
              dateOfBirth: USER_INCOMPLETE_FIXTURE.dateOfBirth,
            }),
            update: jest.fn(),
            remove: jest.fn().mockResolvedValueOnce(removeResponse),
            promote: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            checkCredentials: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValueOnce('token'),
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // SIGN-UP ----------------------------------------------------------------------------------------------------- BEGIN
  it('should signUp user.', async () => {
    expect(
      await service.signUp({
        cpf: USER_INCOMPLETE_FIXTURE.cpf,
        name: USER_INCOMPLETE_FIXTURE.name,
        email: USER_INCOMPLETE_FIXTURE.email,
        password: USER_INCOMPLETE_FIXTURE.password,
        dateOfBirth: USER_INCOMPLETE_FIXTURE.dateOfBirth,
        passwordConfirmation: USER_INCOMPLETE_FIXTURE.password,
      }),
    ).toEqual({
      message: 'Registration Completed Successfully!',
    });
  });
  // SIGN-UP ------------------------------------------------------------------------------------------------------- END

  // SIGN-IN ----------------------------------------------------------------------------------------------------- BEGIN
  it('should signIn user.', async () => {
    jest
      .spyOn(userService, 'checkCredentials')
      .mockResolvedValueOnce(USER_COMPLETE_FIXTURE);

    expect(
      await service.signIn({
        email: USER_COMPLETE_FIXTURE.email,
        password: USER_COMPLETE_FIXTURE.password,
      }),
    ).toEqual({ token: 'token' });
  });

  it('should throw error when signIn.', async () => {
    jest.spyOn(userService, 'checkCredentials').mockResolvedValueOnce(null);

    await expect(
      service.signIn({
        email: USER_COMPLETE_FIXTURE.email,
        password: USER_COMPLETE_FIXTURE.password,
      }),
    ).rejects.toThrow(UnprocessableEntityException);
  });
  // SIGN-IN ------------------------------------------------------------------------------------------------------- END

  // UPDATE ------------------------------------------------------------------------------------------------------ BEGIN
  it('should update user.', async () => {
    jest.spyOn(userService, 'update').mockResolvedValueOnce({
      id: USER_COMPLETE_FIXTURE.id,
      cpf: USER_COMPLETE_FIXTURE.cpf,
      role: USER_COMPLETE_FIXTURE.role,
      name: USER_COMPLETE_FIXTURE.name,
      email: USER_COMPLETE_FIXTURE.email,
      gender: USER_COMPLETE_FIXTURE.gender,
      status: USER_COMPLETE_FIXTURE.status,
      createdAt: USER_COMPLETE_FIXTURE.createdAt,
      updatedAt: USER_COMPLETE_FIXTURE.updatedAt,
      deletedAt: undefined,
      dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
    });

    expect(
      await service.update(
        USER_INCOMPLETE_FIXTURE.id,
        {
          cpf: USER_COMPLETE_FIXTURE.cpf,
          name: USER_COMPLETE_FIXTURE.name,
          role: ERole.ADMIN,
          email: USER_COMPLETE_FIXTURE.email,
          gender: USER_COMPLETE_FIXTURE.gender,
          dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
        },
        USER_ADMIN_FIXTURE,
      ),
    ).toEqual({
      id: USER_COMPLETE_FIXTURE.id,
      cpf: USER_COMPLETE_FIXTURE.cpf,
      role: USER_COMPLETE_FIXTURE.role,
      name: USER_COMPLETE_FIXTURE.name,
      email: USER_COMPLETE_FIXTURE.email,
      gender: USER_COMPLETE_FIXTURE.gender,
      status: USER_COMPLETE_FIXTURE.status,
      createdAt: USER_COMPLETE_FIXTURE.createdAt,
      updatedAt: USER_COMPLETE_FIXTURE.updatedAt,
      dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
    });
  });

  it('should throw error when update user with authUser user.', async () => {
    await expect(
      service.update(
        USER_INCOMPLETE_FIXTURE.id,
        {
          cpf: USER_COMPLETE_FIXTURE.cpf,
          name: USER_COMPLETE_FIXTURE.name,
          role: ERole.ADMIN,
          email: USER_COMPLETE_FIXTURE.email,
          gender: USER_COMPLETE_FIXTURE.gender,
          dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
        },
        USER_COMPLETE_FIXTURE,
      ),
    ).rejects.toThrow(ForbiddenException);
  });
  // UPDATE -------------------------------------------------------------------------------------------------------- END

  // FIND ALL ---------------------------------------------------------------------------------------------------- BEGIN
  it('should find all users ', async () => {
    jest.spyOn(userService, 'findAll').mockResolvedValueOnce(findAllResponse);

    const result = await service.findAll();

    expect(result).toEqual(findAllResponse);
  });
  // FIND ALL ------------------------------------------------------------------------------------------------------ END

  // FIND ONE ---------------------------------------------------------------------------------------------------- BEGIN
  it('should find one user ', async () => {
    jest.spyOn(userService, 'findOne').mockResolvedValueOnce(findOneResponse);

    expect(
      await service.findOne(USER_INCOMPLETE_FIXTURE.id, USER_ADMIN_FIXTURE),
    ).toEqual(findOneResponse);
  });

  it('should throw error when find one user without permission', async () => {
    jest.spyOn(userService, 'findOne').mockResolvedValueOnce(findOneResponse);

    await expect(
      service.findOne(USER_INCOMPLETE_FIXTURE.id, {
        ...USER_INCOMPLETE_FIXTURE,
        id: 'xpto-id',
      }),
    ).rejects.toThrow(UnprocessableEntityException);
  });
  // FIND ONE ------------------------------------------------------------------------------------------------------ END

  // REMOVE  ----------------------------------------------------------------------------------------------------- BEGIN
  it('should remove one user', async () => {
    expect(
      await service.remove(USER_INCOMPLETE_FIXTURE.id, {
        ...USER_ADMIN_FIXTURE,
        id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
      }),
    ).toEqual(removeResponse);
  });

  it('should throw error when remove one user', async () => {
    await expect(
      service.remove(USER_INCOMPLETE_FIXTURE.id, USER_ADMIN_FIXTURE),
    ).rejects.toThrow(BadRequestException);
  });
  // REMOVE  ------------------------------------------------------------------------------------------------------- END

  // PROMOTE  ---------------------------------------------------------------------------------------------------- BEGIN
  it('should promote user only one in database', async () => {
    jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
      {
        id: USER_COMPLETE_FIXTURE.id,
        cpf: USER_COMPLETE_FIXTURE.cpf,
        role: USER_COMPLETE_FIXTURE.role,
        gender: USER_COMPLETE_FIXTURE.gender,
        name: USER_COMPLETE_FIXTURE.name,
        email: USER_COMPLETE_FIXTURE.email,
        status: EStatus.ACTIVE,
        createdAt: USER_COMPLETE_FIXTURE.createdAt,
        updatedAt: USER_COMPLETE_FIXTURE.updatedAt,
        deletedAt: undefined,
        dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
      },
    ]);

    jest.spyOn(userService, 'promote').mockResolvedValueOnce({
      message: 'User promoted to administrator successfully',
    });

    expect(
      await service.promote(USER_COMPLETE_FIXTURE.id, USER_ADMIN_FIXTURE),
    ).toEqual({
      message: 'User promoted to administrator successfully',
    });
  });

  it('should promote user with then one in database', async () => {
    jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
      {
        id: USER_ACTIVE_FIXTURE.id,
        cpf: USER_ACTIVE_FIXTURE.cpf,
        role: USER_ACTIVE_FIXTURE.role,
        gender: USER_ACTIVE_FIXTURE.gender,
        name: USER_ACTIVE_FIXTURE.name,
        email: USER_ACTIVE_FIXTURE.email,
        status: USER_ACTIVE_FIXTURE.status,
        createdAt: USER_ACTIVE_FIXTURE.createdAt,
        updatedAt: USER_ACTIVE_FIXTURE.updatedAt,
        deletedAt: undefined,
        dateOfBirth: USER_ACTIVE_FIXTURE.dateOfBirth,
      },
      {
        id: USER_COMPLETE_FIXTURE.id,
        cpf: USER_COMPLETE_FIXTURE.cpf,
        role: USER_COMPLETE_FIXTURE.role,
        gender: USER_COMPLETE_FIXTURE.gender,
        name: USER_COMPLETE_FIXTURE.name,
        email: USER_COMPLETE_FIXTURE.email,
        status: EStatus.ACTIVE,
        createdAt: USER_COMPLETE_FIXTURE.createdAt,
        updatedAt: USER_COMPLETE_FIXTURE.updatedAt,
        deletedAt: undefined,
        dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
      },
    ]);

    jest.spyOn(userService, 'findOne').mockResolvedValueOnce({
      id: USER_ACTIVE_FIXTURE.id,
      cpf: USER_ACTIVE_FIXTURE.cpf,
      role: USER_ACTIVE_FIXTURE.role,
      gender: USER_ACTIVE_FIXTURE.gender,
      name: USER_ACTIVE_FIXTURE.name,
      email: USER_ACTIVE_FIXTURE.email,
      status: USER_ACTIVE_FIXTURE.status,
      createdAt: USER_ACTIVE_FIXTURE.createdAt,
      updatedAt: USER_ACTIVE_FIXTURE.updatedAt,
      deletedAt: undefined,
      dateOfBirth: USER_ACTIVE_FIXTURE.dateOfBirth,
    });

    jest.spyOn(userService, 'promote').mockResolvedValueOnce({
      message: 'User promoted to administrator successfully',
    });

    expect(
      await service.promote(USER_ACTIVE_FIXTURE.id, USER_ADMIN_FIXTURE),
    ).toEqual({
      message: 'User promoted to administrator successfully',
    });
  });

  it('should throw error when promote user with auth user role equal user', async () => {
    jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
      {
        id: USER_ACTIVE_FIXTURE.id,
        cpf: USER_ACTIVE_FIXTURE.cpf,
        role: USER_ACTIVE_FIXTURE.role,
        gender: USER_ACTIVE_FIXTURE.gender,
        name: USER_ACTIVE_FIXTURE.name,
        email: USER_ACTIVE_FIXTURE.email,
        status: USER_ACTIVE_FIXTURE.status,
        createdAt: USER_ACTIVE_FIXTURE.createdAt,
        updatedAt: USER_ACTIVE_FIXTURE.updatedAt,
        deletedAt: undefined,
        dateOfBirth: USER_ACTIVE_FIXTURE.dateOfBirth,
      },
      {
        id: USER_COMPLETE_FIXTURE.id,
        cpf: USER_COMPLETE_FIXTURE.cpf,
        role: USER_COMPLETE_FIXTURE.role,
        gender: USER_COMPLETE_FIXTURE.gender,
        name: USER_COMPLETE_FIXTURE.name,
        email: USER_COMPLETE_FIXTURE.email,
        status: EStatus.ACTIVE,
        createdAt: USER_COMPLETE_FIXTURE.createdAt,
        updatedAt: USER_COMPLETE_FIXTURE.updatedAt,
        deletedAt: undefined,
        dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
      },
    ]);

    await expect(
      service.promote(USER_ACTIVE_FIXTURE.id, USER_ACTIVE_FIXTURE),
    ).rejects.toThrow(ForbiddenException);
  });

  it('should throw error when try to promote user with role admin', async () => {
    jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
      {
        id: USER_ACTIVE_FIXTURE.id,
        cpf: USER_ACTIVE_FIXTURE.cpf,
        role: ERole.ADMIN,
        gender: USER_ACTIVE_FIXTURE.gender,
        name: USER_ACTIVE_FIXTURE.name,
        email: USER_ACTIVE_FIXTURE.email,
        status: EStatus.ACTIVE,
        createdAt: USER_ACTIVE_FIXTURE.createdAt,
        updatedAt: USER_ACTIVE_FIXTURE.updatedAt,
        deletedAt: undefined,
        dateOfBirth: USER_ACTIVE_FIXTURE.dateOfBirth,
      },
      {
        id: USER_COMPLETE_FIXTURE.id,
        cpf: USER_COMPLETE_FIXTURE.cpf,
        role: USER_COMPLETE_FIXTURE.role,
        gender: USER_COMPLETE_FIXTURE.gender,
        name: USER_COMPLETE_FIXTURE.name,
        email: USER_COMPLETE_FIXTURE.email,
        status: EStatus.ACTIVE,
        createdAt: USER_COMPLETE_FIXTURE.createdAt,
        updatedAt: USER_COMPLETE_FIXTURE.updatedAt,
        deletedAt: undefined,
        dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
      },
    ]);

    jest.spyOn(userService, 'findOne').mockResolvedValueOnce({
      id: USER_ACTIVE_FIXTURE.id,
      cpf: USER_ACTIVE_FIXTURE.cpf,
      role: ERole.ADMIN,
      gender: USER_ACTIVE_FIXTURE.gender,
      name: USER_ACTIVE_FIXTURE.name,
      email: USER_ACTIVE_FIXTURE.email,
      status: USER_ACTIVE_FIXTURE.status,
      createdAt: USER_ACTIVE_FIXTURE.createdAt,
      updatedAt: USER_ACTIVE_FIXTURE.updatedAt,
      deletedAt: undefined,
      dateOfBirth: USER_ACTIVE_FIXTURE.dateOfBirth,
    });

    await expect(
      service.promote(USER_ACTIVE_FIXTURE.id, USER_ADMIN_FIXTURE),
    ).rejects.toThrow(BadRequestException);
  });

  it('should throw error when try to promote user with status inactive', async () => {
    jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
      {
        id: USER_ACTIVE_FIXTURE.id,
        cpf: USER_ACTIVE_FIXTURE.cpf,
        role: USER_ACTIVE_FIXTURE.role,
        gender: USER_ACTIVE_FIXTURE.gender,
        name: USER_ACTIVE_FIXTURE.name,
        email: USER_ACTIVE_FIXTURE.email,
        status: EStatus.INACTIVE,
        createdAt: USER_ACTIVE_FIXTURE.createdAt,
        updatedAt: USER_ACTIVE_FIXTURE.updatedAt,
        deletedAt: undefined,
        dateOfBirth: USER_ACTIVE_FIXTURE.dateOfBirth,
      },
      {
        id: USER_COMPLETE_FIXTURE.id,
        cpf: USER_COMPLETE_FIXTURE.cpf,
        role: USER_COMPLETE_FIXTURE.role,
        gender: USER_COMPLETE_FIXTURE.gender,
        name: USER_COMPLETE_FIXTURE.name,
        email: USER_COMPLETE_FIXTURE.email,
        status: EStatus.ACTIVE,
        createdAt: USER_COMPLETE_FIXTURE.createdAt,
        updatedAt: USER_COMPLETE_FIXTURE.updatedAt,
        deletedAt: undefined,
        dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
      },
    ]);

    jest.spyOn(userService, 'findOne').mockResolvedValueOnce({
      id: USER_ACTIVE_FIXTURE.id,
      cpf: USER_ACTIVE_FIXTURE.cpf,
      role: USER_ACTIVE_FIXTURE.role,
      gender: USER_ACTIVE_FIXTURE.gender,
      name: USER_ACTIVE_FIXTURE.name,
      email: USER_ACTIVE_FIXTURE.email,
      status: EStatus.INACTIVE,
      createdAt: USER_ACTIVE_FIXTURE.createdAt,
      updatedAt: USER_ACTIVE_FIXTURE.updatedAt,
      deletedAt: undefined,
      dateOfBirth: USER_ACTIVE_FIXTURE.dateOfBirth,
    });

    await expect(
      service.promote(USER_ACTIVE_FIXTURE.id, USER_ADMIN_FIXTURE),
    ).rejects.toThrow(BadRequestException);
  });
  // PROMOTE  ------------------------------------------------------------------------------------------------------ END
});
