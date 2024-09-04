import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Users } from './users.entity';
import { UsersService } from './users.service';
import { CreateAuthDto } from '@/modules/auth/dto/create-auth.dto';
import {
  USERS_PAGINATE_FIXTURE,
  USER_COMPLETE_FIXTURE,
  USER_INCOMPLETE_FIXTURE,
} from '@/modules/auth/users/users.fixture';
import { UpdateAuthDto } from '@/modules/auth/dto/update-auth.dto';
import { FilterAuthDto } from '@/modules/auth/dto/filter-auth.dto';
import { ERole } from '@/enums/role.enum';
import { EStatus } from '@/enums/status.enum';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<Users>;

  const createAuthDto: CreateAuthDto = {
    cpf: USER_INCOMPLETE_FIXTURE.cpf,
    name: USER_INCOMPLETE_FIXTURE.name,
    email: USER_INCOMPLETE_FIXTURE.email,
    password: USER_INCOMPLETE_FIXTURE.password,
    dateOfBirth: USER_INCOMPLETE_FIXTURE.dateOfBirth,
    passwordConfirmation: USER_INCOMPLETE_FIXTURE.password,
  };
  const updateAuthDto: UpdateAuthDto = {
    cpf: USER_COMPLETE_FIXTURE.cpf,
    name: USER_COMPLETE_FIXTURE.name,
    email: USER_COMPLETE_FIXTURE.email,
    gender: USER_COMPLETE_FIXTURE.gender,
    dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(Users), useClass: Repository },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<Users>>(getRepositoryToken(Users));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  // create ------------------------------------------------------------------------------------------------------ BEGIN
  it('should create a user', async () => {
    const createAuthDto: CreateAuthDto = {
      cpf: USER_INCOMPLETE_FIXTURE.cpf,
      name: USER_INCOMPLETE_FIXTURE.name,
      email: USER_INCOMPLETE_FIXTURE.email,
      password: USER_INCOMPLETE_FIXTURE.password,
      dateOfBirth: USER_INCOMPLETE_FIXTURE.dateOfBirth,
      passwordConfirmation: USER_INCOMPLETE_FIXTURE.password,
    };

    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(USER_INCOMPLETE_FIXTURE);

    const result = await service.create(createAuthDto);

    expect(result).toEqual({
      id: USER_INCOMPLETE_FIXTURE.id,
      cpf: USER_INCOMPLETE_FIXTURE.cpf,
      role: USER_INCOMPLETE_FIXTURE.role,
      name: USER_INCOMPLETE_FIXTURE.name,
      email: USER_INCOMPLETE_FIXTURE.email,
      status: USER_INCOMPLETE_FIXTURE.status,
      createdAt: USER_INCOMPLETE_FIXTURE.createdAt,
      updatedAt: USER_INCOMPLETE_FIXTURE.updatedAt,
    });
  });

  it('should throw error when create user with a deleted user has already been created with cpf', async () => {
    const createAuthDto: CreateAuthDto = {
      cpf: USER_INCOMPLETE_FIXTURE.cpf,
      name: USER_INCOMPLETE_FIXTURE.name,
      email: USER_INCOMPLETE_FIXTURE.email,
      password: USER_INCOMPLETE_FIXTURE.password,
      dateOfBirth: USER_INCOMPLETE_FIXTURE.dateOfBirth,
      passwordConfirmation: USER_INCOMPLETE_FIXTURE.password,
    };

    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(USER_INCOMPLETE_FIXTURE),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    const result = service.create(createAuthDto);

    expect(result).rejects.toThrowError(InternalServerErrorException);
  });

  it('should throw error when create user with a deleted user has already been created with email', async () => {
    const createAuthDto: CreateAuthDto = {
      cpf: USER_INCOMPLETE_FIXTURE.cpf,
      name: USER_INCOMPLETE_FIXTURE.name,
      email: USER_INCOMPLETE_FIXTURE.email,
      password: USER_INCOMPLETE_FIXTURE.password,
      dateOfBirth: USER_INCOMPLETE_FIXTURE.dateOfBirth,
      passwordConfirmation: USER_INCOMPLETE_FIXTURE.password,
    };

    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(USER_INCOMPLETE_FIXTURE),
    } as any);

    const result = service.create(createAuthDto);

    expect(result).rejects.toThrowError(InternalServerErrorException);
  });

  it('should throw error when create user', async () => {
    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());

    const result = service.create(createAuthDto);

    await expect(result).rejects.toThrow(InternalServerErrorException);
  });
  // create -------------------------------------------------------------------------------------------------------- END

  // UPDATE ------------------------------------------------------------------------------------------------------ BEGIN
  it('should update a user', async () => {
    // find user by id
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(USER_COMPLETE_FIXTURE),
    } as any);

    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    jest.spyOn(repository, 'save').mockResolvedValueOnce(USER_COMPLETE_FIXTURE);

    const result = await service.update(
      USER_COMPLETE_FIXTURE.id,
      updateAuthDto,
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

  it('should throw error when update user', async () => {
    // find user by id
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(USER_COMPLETE_FIXTURE),
    } as any);

    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());

    const result = service.update(USER_COMPLETE_FIXTURE.id, {
      cpf: USER_INCOMPLETE_FIXTURE.cpf,
    });

    await expect(result).rejects.toThrow(InternalServerErrorException);
  });

  it('should throw error when update user with cpf already exists', async () => {
    // find user by id
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce({
        ...USER_COMPLETE_FIXTURE,
        id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
      }),
    } as any);

    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(USER_COMPLETE_FIXTURE),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());

    const result = service.update(USER_COMPLETE_FIXTURE.id, {
      cpf: USER_INCOMPLETE_FIXTURE.cpf,
    });

    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should throw error when update user with email already exists', async () => {
    // find user by id
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce({
        ...USER_COMPLETE_FIXTURE,
        id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
      }),
    } as any);

    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(USER_COMPLETE_FIXTURE),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(USER_COMPLETE_FIXTURE),
    } as any);

    const result = service.update(USER_COMPLETE_FIXTURE.id, {
      email: USER_INCOMPLETE_FIXTURE.email,
    });

    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should throw error when update user role with status incomplete', async () => {
    // find user by id
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(USER_INCOMPLETE_FIXTURE),
    } as any);

    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    const result = service.update(USER_COMPLETE_FIXTURE.id, {
      role: ERole.ADMIN,
    });

    await expect(result).rejects.toThrow(BadRequestException);
  });
  // UPDATE -------------------------------------------------------------------------------------------------------- END

  // FIND ALL ---------------------------------------------------------------------------------------------------- BEGIN
  it('should find all users with filters', async () => {
    const filterAuthDto: FilterAuthDto = {
      cpf: USER_INCOMPLETE_FIXTURE.cpf,
      email: USER_INCOMPLETE_FIXTURE.email,
      asc: 'name',
      page: 1,
      name: USER_INCOMPLETE_FIXTURE.name,
      role: ERole.USER,
      limit: 10,
      status: EStatus.INCOMPLETE,
      withDeleted: true,
    };

    // find all users by filter
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      getOne: jest.fn(),
      orderBy: jest.fn(),
      getMany: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getManyAndCount: jest
        .fn()
        .mockReturnValueOnce([[USER_INCOMPLETE_FIXTURE], 1]),
      leftJoinAndSelect: jest.fn(),
    } as any);

    const result = await service.findAll(filterAuthDto);

    expect(result).toEqual({
      ...USERS_PAGINATE_FIXTURE,
      data: [
        {
          id: USER_INCOMPLETE_FIXTURE.id,
          cpf: USER_INCOMPLETE_FIXTURE.cpf,
          role: USER_INCOMPLETE_FIXTURE.role,
          name: USER_INCOMPLETE_FIXTURE.name,
          email: USER_INCOMPLETE_FIXTURE.email,
          status: USER_INCOMPLETE_FIXTURE.status,
          createdAt: USER_INCOMPLETE_FIXTURE.createdAt,
          updatedAt: USER_INCOMPLETE_FIXTURE.updatedAt,
        },
      ],
    });
  });

  it('should find all users without filters', async () => {
    // find all users
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      getOne: jest.fn(),
      orderBy: jest.fn(),
      getMany: jest.fn().mockReturnValueOnce([USER_INCOMPLETE_FIXTURE]),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getManyAndCount: jest.fn(),
      leftJoinAndSelect: jest.fn(),
    } as any);

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
      },
    ]);
  });
  // FIND ALL ------------------------------------------------------------------------------------------------------ END

  // FIND ONE ---------------------------------------------------------------------------------------------------- BEGIN
  it('should find one user by id', async () => {
    // find user by id
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce({
        ...USER_INCOMPLETE_FIXTURE,
        deletedAt: new Date('2024-01-01'),
      }),
    } as any);

    const result = await service.findOne(USER_INCOMPLETE_FIXTURE.id);

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

  it('should find one user by id with must clean user false', async () => {
    // find user by id
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(USER_INCOMPLETE_FIXTURE),
    } as any);

    const result = await service.findOne(
      USER_INCOMPLETE_FIXTURE.id,
      false,
      false,
    );

    expect(result).toEqual(USER_INCOMPLETE_FIXTURE);
  });
  // FIND ONE ------------------------------------------------------------------------------------------------------ END

  // REMOVE  ----------------------------------------------------------------------------------------------------- BEGIN
  it('should remove user by id', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(USER_INCOMPLETE_FIXTURE),
    } as any);

    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...USER_INCOMPLETE_FIXTURE,
      status: EStatus.INACTIVE,
      deletedAt: new Date(),
    });

    const result = await service.remove(USER_INCOMPLETE_FIXTURE.id);

    expect(result).toEqual({
      message: `User with id ${USER_INCOMPLETE_FIXTURE.id} successfully removed`,
    });
  });
  // REMOVE  ------------------------------------------------------------------------------------------------------- END

  // CHECK CREDENTIALS  ------------------------------------------------------------------------------------------ BEGIN
  it('should check credentials', async () => {
    const user: Users = {
      ...USER_INCOMPLETE_FIXTURE,
      status: EStatus.INCOMPLETE,
      salt: '$2b$10$o3nYsQECy/ZKwFQSssiyMO',
      password: '$2b$10$o3nYsQECy/ZKwFQSssiyMOzN5dKjhcP9iEi5DcCeLLuYcpyKJEUJ2',
    };
    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(user),
    } as any);

    const result = await service.checkCredentials({
      email: USER_INCOMPLETE_FIXTURE.email,
      password: USER_INCOMPLETE_FIXTURE.password,
    });

    expect(result).toEqual(user);
  });

  it('should check credentials with status incomplete', async () => {
    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce({
        ...USER_INCOMPLETE_FIXTURE,
        salt: '$2b$10$o3nYsQECy/ZKwFQSssiyMO',
      }),
    } as any);

    const result = await service.checkCredentials({
      email: USER_INCOMPLETE_FIXTURE.email,
      password: USER_INCOMPLETE_FIXTURE.password,
    });

    expect(result).toEqual(null);
  });

  it('should check credentials with credentials invalid', async () => {
    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce({
        ...USER_INCOMPLETE_FIXTURE,
        status: EStatus.INCOMPLETE,
        salt: '$2b$10$o3nYsQECy/ZKwFQSssiyMO',
      }),
    } as any);

    const result = await service.checkCredentials({
      email: USER_INCOMPLETE_FIXTURE.email,
      password: USER_INCOMPLETE_FIXTURE.password,
    });

    expect(result).toEqual(null);
  });
  // CHECK CREDENTIALS  -------------------------------------------------------------------------------------------- END

  // PROMOTE  ---------------------------------------------------------------------------------------------------- BEGIN
  it('should promote user', async () => {
    // find user by id
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce({
        ...USER_COMPLETE_FIXTURE,
        status: EStatus.ACTIVE,
      }),
    } as any);

    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...USER_COMPLETE_FIXTURE,
      role: ERole.ADMIN,
    });

    const result = await service.promote(USER_COMPLETE_FIXTURE.id);
    expect(result).toEqual({
      message: 'User promoted to administrator successfully',
    });
  });

  it('should throw error when promote user', async () => {
    // find user by id
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce({
        ...USER_COMPLETE_FIXTURE,
        status: EStatus.ACTIVE,
      }),
    } as any);

    // find user by cpf
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    // find user by email
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      getOne: jest.fn().mockReturnValueOnce(null),
    } as any);

    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());

    const result = service.promote(USER_COMPLETE_FIXTURE.id);

    await expect(result).rejects.toThrow(InternalServerErrorException);
  });
  // PROMOTE  ------------------------------------------------------------------------------------------------------ END
});
