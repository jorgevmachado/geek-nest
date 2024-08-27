import {
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

import { EGender, ERole } from '@/modules/users/users.enum';
import { EStatus } from '@/enums/status.enum';

import {
  USERS_PAGINATE,
  USER_FIXTURE,
  USER_INCOMPLETE_DTO,
  userClean,
  usersClean,
} from './users.fixture';
import { Users } from './users.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<Users>;
  const createQueryBuilderMock = {
    where: jest.fn(),
    getOne: jest.fn(),
    orderBy: jest.fn(),
    andWhere: jest.fn(),
    withDeleted: jest.fn(),
    getManyAndCount: jest.fn(),
    leftJoinAndSelect: jest.fn(),
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
  });

  it('should create a user successfully', async () => {
    jest.spyOn(repository, 'save').mockResolvedValueOnce(USER_FIXTURE);
    const result = await service.create(USER_INCOMPLETE_DTO);
    expect(result).toEqual(userClean(USER_FIXTURE));
  });

  it('should throw an error when failing to save user in database', async () => {
    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());
    const result = service.create(USER_INCOMPLETE_DTO);
    await expect(result).rejects.toThrow(InternalServerErrorException);
  });

  it('should return users without filter successfully', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getMany: jest.fn().mockResolvedValueOnce([USER_FIXTURE]),
    } as any);
    const result = await service.findAll({});
    expect(result).toEqual(usersClean([USER_FIXTURE]));
  });

  it('should return users with filter successfully', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getManyAndCount: jest.fn().mockResolvedValueOnce([[USER_FIXTURE], 1]),
    } as any);
    const result = await service.findAll({
      page: 1,
      name: USER_FIXTURE.name,
      email: USER_FIXTURE.email,
      cpf: USER_FIXTURE.cpf,
      limit: 10,
      role: ERole.USER,
      status: EStatus.INCOMPLETE,
      asc: 'name',
    });
    expect(result).toEqual({
      ...USERS_PAGINATE,
      data: usersClean(USERS_PAGINATE.data),
    });
  });

  it('should return all users with filter removed successfully.', async () => {
    const user = {
      ...USER_FIXTURE,
      status: EStatus.INACTIVE,
      deletedAt: new Date(),
    };
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getMany: jest.fn().mockResolvedValueOnce([user]),
    } as any);

    const result = await service.findAll({ all: true });
    expect(result).toEqual(usersClean([user]));
  });

  it('should return user with valid credentials', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce({
      ...USER_FIXTURE,
      validatePassword: jest.fn().mockResolvedValueOnce(true),
    });
    const result = await service.checkCredentials({
      email: USER_FIXTURE.email,
      password: USER_FIXTURE.password,
    });
    expect(result).toEqual(USER_FIXTURE);
  });

  it('should return null for user with inactive status', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce({
      ...USER_FIXTURE,
      status: EStatus.INACTIVE,
      validatePassword: jest.fn().mockResolvedValueOnce(true),
    });
    const result = await service.checkCredentials({
      email: USER_FIXTURE.email,
      password: USER_FIXTURE.password,
    });
    expect(result).toBeNull();
  });

  it('should return null for invalid credentials', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce({
      ...USER_FIXTURE,
      validatePassword: jest.fn().mockResolvedValueOnce(false),
    });
    const result = await service.checkCredentials({
      email: USER_FIXTURE.email,
      password: USER_FIXTURE.password,
    });
    expect(result).toBeNull();
  });

  it('should return user successfully', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce(USER_FIXTURE),
    } as any);
    const result = await service.findOne(USER_FIXTURE.id, USER_FIXTURE);
    expect(result).toEqual(userClean(USER_FIXTURE));
  });

  it('should throw error when user not found', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce(null),
    } as any);
    const result = service.findOne(USER_FIXTURE.id, USER_FIXTURE);
    await expect(result).rejects.toThrow(NotFoundException);
  });

  it('should throw error when update role user without being admin', async () => {
    const result = service.update(
      USER_FIXTURE.id,
      { role: ERole.ADMIN },
      {
        ...USER_FIXTURE,
        role: ERole.USER,
      },
    );
    await expect(result).rejects.toThrow(ForbiddenException);
  });

  it('should throw error when updating the role user without active status', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce({
        ...USER_FIXTURE,
        status: EStatus.INCOMPLETE,
      }),
    } as any);

    const result = service.update(
      USER_FIXTURE.id,
      { role: ERole.ADMIN },
      {
        ...USER_FIXTURE,
        role: ERole.ADMIN,
      },
    );
    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should update user successfully', async () => {
    const UPDATE_USER_SUCCESSFULLY = {
      ...USER_FIXTURE,
      id: 'UPDATE_USER_SUCCESSFULLY',
      name: 'Updated Name',
      gender: EGender.FEMALE,
      dateOfBirth: new Date('1987-01-01'),
    };
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce(UPDATE_USER_SUCCESSFULLY),
    } as any);

    jest
      .spyOn(repository, 'save')
      .mockResolvedValueOnce(UPDATE_USER_SUCCESSFULLY);

    const result = await service.update(
      UPDATE_USER_SUCCESSFULLY.id,
      {
        name: 'Updated Name',
        gender: UPDATE_USER_SUCCESSFULLY.gender,
        dateOfBirth: UPDATE_USER_SUCCESSFULLY.dateOfBirth,
      },
      UPDATE_USER_SUCCESSFULLY,
    );
    expect(result).toEqual(userClean(UPDATE_USER_SUCCESSFULLY));
  });

  it('should throw error when update user in database ', async () => {
    const UPDATE_USER_ERROR = {
      ...USER_FIXTURE,
      id: 'UPDATE_USER_SUCCESSFULLY',
      name: 'Updated Name',
      gender: EGender.FEMALE,
      dateOfBirth: new Date('1987-01-01'),
    };
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce(UPDATE_USER_ERROR),
    } as any);

    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());

    const result = service.update(
      UPDATE_USER_ERROR.id,
      {
        name: UPDATE_USER_ERROR.name,
        gender: UPDATE_USER_ERROR.gender,
        dateOfBirth: UPDATE_USER_ERROR.dateOfBirth,
      },
      UPDATE_USER_ERROR,
    );
    await expect(result).rejects.toThrow(InternalServerErrorException);
  });

  it('should throw error when CPF already exists', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce(USER_FIXTURE),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest
        .fn()
        .mockResolvedValueOnce({ ...USER_FIXTURE, id: 'OTHER_USER' }),
    } as any);

    const result = service.update(USER_FIXTURE.id, { cpf: USER_FIXTURE.cpf });
    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should throw error when EMAIL already exists', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce(USER_FIXTURE),
    } as any);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest
        .fn()
        .mockResolvedValueOnce({ ...USER_FIXTURE, id: 'USER_EMAIL_EQUAL' }),
    } as any);

    const result = service.update(USER_FIXTURE.id, {
      email: USER_FIXTURE.email,
    });
    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should remove user successfully', async () => {
    const REMOVED_USER = {
      ...USER_FIXTURE,
      id: 'REMOVED_USER',
      status: EStatus.INACTIVE,
      deletedAt: new Date(),
    };

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce(USER_FIXTURE),
    } as any);

    jest.spyOn(repository, 'save').mockResolvedValueOnce(REMOVED_USER);

    const result = await service.remove(USER_FIXTURE.id, {
      ...USER_FIXTURE,
      id: 'AUTH_USER',
      role: ERole.ADMIN,
    });

    expect(result).toEqual({
      message: 'User with id USER_INCOMPLETE successfully removed',
    });
  });

  it('should promote first user in database to admin', async () => {
    jest.spyOn(repository, 'findAndCount').mockResolvedValueOnce([
      [
        {
          ...USER_FIXTURE,
          status: EStatus.ACTIVE,
        },
      ],
      1,
    ]);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce({
        ...USER_FIXTURE,
        status: EStatus.ACTIVE,
      }),
    } as any);

    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...USER_FIXTURE,
      role: ERole.ADMIN,
    });

    const result = await service.promote(USER_FIXTURE.id, {
      ...USER_FIXTURE,
      role: ERole.ADMIN,
    });

    expect(result).toEqual({
      message: 'User promoted to administrator successfully',
    });
  });

  it('should throw error when failing to save user in database', async () => {
    jest.spyOn(repository, 'findAndCount').mockResolvedValueOnce([
      [
        {
          ...USER_FIXTURE,
          id: 'FIRST_PROMOTE_USER',
          status: EStatus.ACTIVE,
        },
        {
          ...USER_FIXTURE,
          id: 'SECOND_PROMOTE_USER',
          status: EStatus.ACTIVE,
        },
      ],
      2,
    ]);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce({
        ...USER_FIXTURE,
        id: 'FIRST_PROMOTE_USER',
        status: EStatus.ACTIVE,
      }),
    } as any);

    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());

    const result = service.promote('FIRST_PROMOTE_USER', {
      ...USER_FIXTURE,
      id: 'AUTH_PROMOTE_USER',
      role: ERole.ADMIN,
      status: EStatus.ACTIVE,
    });

    await expect(result).rejects.toThrow(InternalServerErrorException);
  });

  it('should throw error when a non-admin user tries to perform action on another users data', async () => {
    jest.spyOn(repository, 'findAndCount').mockResolvedValueOnce([
      [
        { ...USER_FIXTURE, id: 'FIRST_OTHER_USER_NON_ADMIN' },
        { ...USER_FIXTURE, id: 'SECOND_OTHER_USER_NON_ADMIN' },
      ],
      2,
    ]);
    const result = service.promote('FIRST_OTHER_USER_NON_ADMIN', {
      ...USER_FIXTURE,
      id: 'AUTH_USER_OTHER',
    });

    await expect(result).rejects.toThrow(ForbiddenException);
  });

  it('should throw error when a non-admin user tries to remove another user', async () => {
    const result = service.remove(USER_FIXTURE.id, {
      ...USER_FIXTURE,
      id: 'AUTH_USER',
    });
    await expect(result).rejects.toThrow(ForbiddenException);
  });

  it('should throw error when user tries to remove yourself', async () => {
    const result = service.remove(USER_FIXTURE.id, {
      ...USER_FIXTURE,
      role: ERole.ADMIN,
    });
    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should throw error when user tries to promote user with status other than active and a role other than admin', async () => {
    const FIRST_OTHER_USER_NON_ADMIN_INCOMPLETE = {
      ...USER_FIXTURE,
      id: 'FIRST_OTHER_USER_NON_ADMIN_INCOMPLETE',
      status: EStatus.INCOMPLETE,
    };

    jest.spyOn(repository, 'findAndCount').mockResolvedValueOnce([
      [
        FIRST_OTHER_USER_NON_ADMIN_INCOMPLETE,
        {
          ...USER_FIXTURE,
          id: 'SECOND_OTHER_USER_NON_ADMIN_COMPLETE',
          status: EStatus.ACTIVE,
        },
      ],
      2,
    ]);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest
        .fn()
        .mockResolvedValueOnce(FIRST_OTHER_USER_NON_ADMIN_INCOMPLETE),
    } as any);

    const result = service.promote(FIRST_OTHER_USER_NON_ADMIN_INCOMPLETE.id, {
      ...USER_FIXTURE,
      id: 'AUTH_USER_OTHER',
      role: ERole.ADMIN,
    });

    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should throw error when user tries to promote user with status  admin', async () => {
    const FIRST_OTHER_USER_ADMIN_ACTIVE = {
      ...USER_FIXTURE,
      id: 'FIRST_OTHER_USER_ADMIN_INCOMPLETE',
      role: ERole.ADMIN,
      status: EStatus.ACTIVE,
    };

    jest.spyOn(repository, 'findAndCount').mockResolvedValueOnce([
      [
        FIRST_OTHER_USER_ADMIN_ACTIVE,
        {
          ...USER_FIXTURE,
          id: 'SECOND_OTHER_USER_NON_ADMIN_COMPLETE',
          status: EStatus.ACTIVE,
        },
      ],
      2,
    ]);

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce(FIRST_OTHER_USER_ADMIN_ACTIVE),
    } as any);

    const result = service.promote(FIRST_OTHER_USER_ADMIN_ACTIVE.id, {
      ...USER_FIXTURE,
      id: 'AUTH_USER_OTHER',
      role: ERole.ADMIN,
    });

    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should return user removed successfully', async () => {
    const USER_REMOVED = {
      ...USER_FIXTURE,
      id: 'USER_REMOVED',
      deletedAt: new Date(),
    };

    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      ...createQueryBuilderMock,
      getOne: jest.fn().mockResolvedValueOnce(USER_REMOVED),
    } as any);

    const result = await service.findOne(
      USER_REMOVED.id,
      {
        ...USER_FIXTURE,
        id: 'AUTH_USER',
        role: ERole.ADMIN,
      },
      true,
    );

    expect(result).toEqual(USER_REMOVED);
  });

  it('should throw error when user non-admin tries to get information about other user', async () => {
    const result = service.findOne(USER_FIXTURE.id, {
      ...USER_FIXTURE,
      id: 'AUTH_USER',
    });
    await expect(result).rejects.toThrow(ForbiddenException);
  });
});
