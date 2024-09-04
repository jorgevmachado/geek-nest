import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import {
  BadRequestException,
  ForbiddenException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { UsersService } from '@/modules/auth/users/users.service';
import {
  USER_ACTIVE_FIXTURE,
  USER_ADMIN_FIXTURE,
  USER_COMPLETE_FIXTURE,
  USER_INCOMPLETE_FIXTURE,
} from '@/modules/auth/users/users.fixture';
import { CreateAuthDto } from '@/modules/auth/dto/create-auth.dto';
import { UpdateAuthDto } from '@/modules/auth/dto/update-auth.dto';
import { ERole } from '@/enums/role.enum';
import { EStatus } from '@/enums/status.enum';

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
            update: jest.fn(),
            remove: jest.fn(),
            promote: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
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

  // signUp ------------------------------------------------------------------------------------------------------ BEGIN
  it('should signUp user.', async () => {
    const createAuthDto: CreateAuthDto = {
      cpf: USER_INCOMPLETE_FIXTURE.cpf,
      name: USER_INCOMPLETE_FIXTURE.name,
      email: USER_INCOMPLETE_FIXTURE.email,
      password: USER_INCOMPLETE_FIXTURE.password,
      dateOfBirth: USER_INCOMPLETE_FIXTURE.dateOfBirth,
      passwordConfirmation: USER_INCOMPLETE_FIXTURE.password,
    };
    jest.spyOn(userService, 'create').mockResolvedValueOnce({
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
    });
    expect(await service.signUp(createAuthDto)).toEqual({
      message: 'Registration Completed Successfully!',
    });
  });
  // signUp -------------------------------------------------------------------------------------------------------- END

  // signIn ------------------------------------------------------------------------------------------------------ BEGIN
  it('should signIn user.', async () => {
    jest
      .spyOn(userService, 'checkCredentials')
      .mockResolvedValueOnce(USER_COMPLETE_FIXTURE);
    jest.spyOn(jwtService, 'sign').mockReturnValueOnce('token');

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
  // signIn -------------------------------------------------------------------------------------------------------- END

  // update ------------------------------------------------------------------------------------------------------ BEGIN
  it('should update user.', async () => {
    const updateAuthDto: UpdateAuthDto = {
      cpf: USER_COMPLETE_FIXTURE.cpf,
      name: USER_COMPLETE_FIXTURE.name,
      role: ERole.ADMIN,
      email: USER_COMPLETE_FIXTURE.email,
      gender: USER_COMPLETE_FIXTURE.gender,
      dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
    };

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
    const result = await service.update(
      USER_INCOMPLETE_FIXTURE.id,
      updateAuthDto,
      USER_ADMIN_FIXTURE,
    );

    expect(result).toEqual({
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
    const updateAuthDto: UpdateAuthDto = {
      cpf: USER_COMPLETE_FIXTURE.cpf,
      name: USER_COMPLETE_FIXTURE.name,
      role: ERole.ADMIN,
      email: USER_COMPLETE_FIXTURE.email,
      gender: USER_COMPLETE_FIXTURE.gender,
      dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
    };
    const result = service.update(
      USER_INCOMPLETE_FIXTURE.id,
      updateAuthDto,
      USER_COMPLETE_FIXTURE,
    );

    await expect(result).rejects.toThrow(ForbiddenException);
  });
  // update -------------------------------------------------------------------------------------------------------- END

  // FIND ALL ---------------------------------------------------------------------------------------------------- BEGIN
  it('should find all users ', async () => {
    jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
      {
        id: USER_INCOMPLETE_FIXTURE.id,
        cpf: USER_INCOMPLETE_FIXTURE.cpf,
        role: USER_INCOMPLETE_FIXTURE.role,
        name: USER_INCOMPLETE_FIXTURE.name,
        email: USER_INCOMPLETE_FIXTURE.email,
        status: USER_INCOMPLETE_FIXTURE.status,
        createdAt: USER_INCOMPLETE_FIXTURE.createdAt,
        updatedAt: USER_INCOMPLETE_FIXTURE.updatedAt,
        deletedAt: undefined,
        gender: undefined,
        dateOfBirth: undefined,
      },
    ]);

    const result = await service.findAll();

    expect(result).toEqual([
      {
        id: USER_INCOMPLETE_FIXTURE.id,
        cpf: USER_INCOMPLETE_FIXTURE.cpf,
        role: USER_INCOMPLETE_FIXTURE.role,
        name: USER_INCOMPLETE_FIXTURE.name,
        email: USER_INCOMPLETE_FIXTURE.email,
        status: USER_INCOMPLETE_FIXTURE.status,
        createdAt: USER_INCOMPLETE_FIXTURE.createdAt,
        updatedAt: USER_INCOMPLETE_FIXTURE.updatedAt,
        deletedAt: undefined,
        gender: undefined,
        dateOfBirth: undefined,
      },
    ]);
  });
  // FIND ALL ------------------------------------------------------------------------------------------------------ END

  // FIND ONE ---------------------------------------------------------------------------------------------------- BEGIN
  it('should find one user ', async () => {
    jest.spyOn(userService, 'findOne').mockResolvedValueOnce({
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
    });

    const result = await service.findOne(
      USER_INCOMPLETE_FIXTURE.id,
      USER_ADMIN_FIXTURE,
    );

    expect(result).toEqual({
      id: USER_INCOMPLETE_FIXTURE.id,
      cpf: USER_INCOMPLETE_FIXTURE.cpf,
      role: USER_INCOMPLETE_FIXTURE.role,
      name: USER_INCOMPLETE_FIXTURE.name,
      email: USER_INCOMPLETE_FIXTURE.email,
      status: USER_INCOMPLETE_FIXTURE.status,
      createdAt: USER_INCOMPLETE_FIXTURE.createdAt,
      updatedAt: USER_INCOMPLETE_FIXTURE.updatedAt,
      deletedAt: new Date('2024-01-01'),
    });
  });
  // FIND ONE ------------------------------------------------------------------------------------------------------ END

  // REMOVE  ----------------------------------------------------------------------------------------------------- BEGIN
  it('should remove one user', async () => {
    jest.spyOn(userService, 'remove').mockResolvedValueOnce({
      message:
        'User with id eaca4c08-e62d-495a-ae1c-918199da8d52 successfully removed',
    });
    const result = await service.remove(USER_INCOMPLETE_FIXTURE.id, {
      ...USER_ADMIN_FIXTURE,
      id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
    });

    expect(result).toEqual({
      message:
        'User with id eaca4c08-e62d-495a-ae1c-918199da8d52 successfully removed',
    });
  });

  it('should throw error when remove one user', async () => {
    jest.spyOn(userService, 'remove').mockResolvedValueOnce({
      message:
        'User with id eaca4c08-e62d-495a-ae1c-918199da8d52 successfully removed',
    });
    const result = service.remove(
      USER_INCOMPLETE_FIXTURE.id,
      USER_ADMIN_FIXTURE,
    );

    await expect(result).rejects.toThrow(BadRequestException);
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

    const result = await service.promote(
      USER_COMPLETE_FIXTURE.id,
      USER_ADMIN_FIXTURE,
    );

    expect(result).toEqual({
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

    const result = await service.promote(
      USER_ACTIVE_FIXTURE.id,
      USER_ADMIN_FIXTURE,
    );

    expect(result).toEqual({
      message: 'User promoted to administrator successfully',
    });
  });
  // PROMOTE  ------------------------------------------------------------------------------------------------------ END
});
