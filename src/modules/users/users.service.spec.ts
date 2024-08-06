import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EGender, ERole, EStatus } from './users.interface';
import {
  USER_FIXTURE,
  USER_INCOMPLETE_DTO,
  userClean,
  USERS_PAGINATE,
  usersClean,
} from './users.fixture';
import { PAGINATE } from '../../fixtures';
import {
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<Users>;

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

  it('must return the findAll method without filters.', async () => {
    const user = USER_FIXTURE;
    jest.spyOn(repository, 'find').mockResolvedValueOnce([user]);
    expect(await service.findAll({})).toEqual(usersClean([user]));
  });

  it('must return the findAll method with filter user removed.', async () => {
    const user = {
      ...USER_FIXTURE,
      status: EStatus.INACTIVE,
      deletedAt: new Date(),
    };
    jest.spyOn(repository, 'find').mockResolvedValueOnce([user]);
    expect(await service.findAll({ all: true })).toEqual(usersClean([user]));
  });

  it('must return the findOne method.', async () => {
    const user = USER_FIXTURE;
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(user);
    expect(await service.findOne(user.id)).toEqual(userClean(user));
  });

  it('must return the findOne method with user removed.', async () => {
    const user = {
      ...USER_FIXTURE,
      status: EStatus.INACTIVE,
      deletedAt: new Date(),
    };
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(user);
    expect(await service.findOne(user.id, true)).toEqual(userClean(user));
  });

  it('must return the findOne method not found.', async () => {
    const user = USER_FIXTURE;
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    await expect(service.findOne(user.id)).rejects.toThrow(NotFoundException);
  });

  it('must return the checkCredentials method failed.', async () => {
    const user = {
      ...USER_FIXTURE,
      validatePassword: jest.fn().mockResolvedValueOnce(false),
    };
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(user);
    expect(
      await service.checkCredentials({
        email: user.email,
        password: user.password,
      }),
    ).toBeNull();
  });

  it('must return the checkCredentials user with status inactive.', async () => {
    const user = {
      ...USER_FIXTURE,
      status: EStatus.INACTIVE,
    };
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(user);
    expect(
      await service.checkCredentials({
        email: user.email,
        password: user.password,
      }),
    ).toBeNull();
  });

  it('must return the checkCredentials method success.', async () => {
    const user = USER_FIXTURE;
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce({
      ...user,
      validatePassword: jest.fn().mockResolvedValueOnce(true),
    });
    expect(
      await service.checkCredentials({
        email: user.email,
        password: user.password,
      }),
    ).toEqual(user);
  });

  it('must return the findAll method without filters empty.', async () => {
    jest.spyOn(repository, 'find').mockResolvedValueOnce([]);
    expect(await service.findAll({})).toEqual([]);
  });

  it('must return the findAll method with filters status incomplete', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      getManyAndCount: jest.fn().mockResolvedValueOnce([[USER_FIXTURE], 1]),
    } as any);
    expect(
      await service.findAll({
        page: 1,
        name: USER_FIXTURE.name,
        email: USER_FIXTURE.email,
        cpf: USER_FIXTURE.cpf,
        limit: 10,
        role: ERole.USER,
        status: EStatus.INCOMPLETE,
        asc: 'name',
      }),
    ).toEqual({
      ...USERS_PAGINATE,
      data: usersClean(USERS_PAGINATE.data),
    });
  });

  it('must return the findAll method with filters empty', async () => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      getManyAndCount: jest.fn().mockResolvedValueOnce([[], 0]),
    } as any);

    expect(
      await service.findAll({
        page: 1,
        limit: 10,
        role: ERole.USER,
        status: EStatus.INCOMPLETE,
        asc: 'name',
      }),
    ).toEqual(PAGINATE);
  });

  it('must create an incomplete user', async () => {
    jest.spyOn(repository, 'save').mockResolvedValueOnce(USER_FIXTURE);
    expect(await service.create(USER_INCOMPLETE_DTO)).toEqual(USER_FIXTURE);
  });

  it('must create an incomplete user with error', async () => {
    await expect(
      service.create({
        ...USER_INCOMPLETE_DTO,
        passwordConfirmation: '0',
      }),
    ).rejects.toThrow(InternalServerErrorException);
  });

  it('must update an incomplete user', async () => {
    const userComplete = {
      ...USER_FIXTURE,
      cpf: '62627761846',
      email: 'mail@mail.com',
      status: EStatus.ACTIVE,
    };
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(USER_FIXTURE);
    jest.spyOn(repository, 'save').mockResolvedValueOnce(userComplete);
    expect(
      await service.update(USER_FIXTURE.id, { gender: userComplete.gender }),
    ).toEqual(userClean(userComplete));
  });

  it('must update an incomplete user with error', async () => {
    const userComplete = {
      ...USER_FIXTURE,
      cpf: '62627761846',
      email: 'mail@mail.com',
      gender: EGender.MALE,
      status: EStatus.ACTIVE,
    };
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(USER_FIXTURE);
    await expect(
      service.update(USER_FIXTURE.id, { gender: userComplete.gender }),
    ).rejects.toThrow(InternalServerErrorException);
  });

  it('must update an incomplete user with cpf already exists', async () => {
    const userComplete = {
      ...USER_FIXTURE,
      gender: EGender.MALE,
      status: EStatus.ACTIVE,
    };
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(USER_FIXTURE);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce({
      ...USER_FIXTURE,
      id: 'USER_CPF_EQUAL',
    });
    jest.spyOn(repository, 'save').mockResolvedValueOnce(userComplete);
    await expect(
      service.update(USER_FIXTURE.id, { cpf: userComplete.cpf }),
    ).rejects.toThrow(BadRequestException);
  });

  it('must update an incomplete user with email already exists', async () => {
    const userComplete = {
      ...USER_FIXTURE,
      gender: EGender.MALE,
      status: EStatus.ACTIVE,
    };
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(USER_FIXTURE);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce({
      ...USER_FIXTURE,
      id: 'USER_EMAIL_EQUAL',
    });
    jest.spyOn(repository, 'save').mockResolvedValueOnce(userComplete);
    await expect(
      service.update(USER_FIXTURE.id, { email: userComplete.email }),
    ).rejects.toThrow(BadRequestException);
  });

  it('must update an incomplete user with role', async () => {
    const userComplete = {
      ...USER_FIXTURE,
      gender: EGender.MALE,
    };
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce({
      ...USER_FIXTURE,
      status: EStatus.INCOMPLETE,
    });
    jest.spyOn(repository, 'save').mockResolvedValueOnce(userComplete);
    await expect(
      service.update(USER_FIXTURE.id, { role: ERole.ADMIN }),
    ).rejects.toThrow(BadRequestException);
  });

  it('must promote an active user to admin when just one user in database', async () => {
    const AUTH_USER = USER_FIXTURE;
    const ONLY_ONE_USER = {
      ...USER_FIXTURE,
      role: ERole.USER,
      status: EStatus.ACTIVE,
    };
    jest
      .spyOn(repository, 'findAndCount')
      .mockResolvedValueOnce([[ONLY_ONE_USER], 1]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(ONLY_ONE_USER);
    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...ONLY_ONE_USER,
      role: ERole.ADMIN,
    });
    expect(await service.promote(USER_FIXTURE.id, AUTH_USER)).toEqual({
      message: 'User promoted to administrator successfully',
    });
  });

  it('must promote an active user to admin when user with status admin request', async () => {
    const AUTH_USER = {
      ...USER_FIXTURE,
      id: 'AUTH_USER',
      role: ERole.ADMIN,
      status: EStatus.ACTIVE,
    };

    const FIRST_USER = {
      ...USER_FIXTURE,
      id: 'FIRST_USER',
      role: ERole.USER,
      status: EStatus.INCOMPLETE,
    };

    const SECOND_USER = {
      ...USER_FIXTURE,
      id: 'SECOND_USER',
      role: ERole.USER,
      status: EStatus.ACTIVE,
    };
    jest
      .spyOn(repository, 'findAndCount')
      .mockResolvedValueOnce([[FIRST_USER, SECOND_USER], 2]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(SECOND_USER);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(SECOND_USER);
    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...SECOND_USER,
      role: ERole.ADMIN,
    });
    expect(await service.promote(SECOND_USER.id, AUTH_USER)).toEqual({
      message: 'User promoted to administrator successfully',
    });
  });

  it('must promote an active user to admin when user with status user request', async () => {
    const AUTH_USER = {
      ...USER_FIXTURE,
      id: 'AUTH_USER',
      role: ERole.USER,
      status: EStatus.ACTIVE,
    };

    const FIRST_USER = {
      ...USER_FIXTURE,
      id: 'FIRST_USER',
      role: ERole.USER,
      status: EStatus.INCOMPLETE,
    };

    const SECOND_USER = {
      ...USER_FIXTURE,
      id: 'SECOND_USER',
      role: ERole.USER,
      status: EStatus.ACTIVE,
    };
    jest
      .spyOn(repository, 'findAndCount')
      .mockResolvedValueOnce([[FIRST_USER, SECOND_USER], 2]);
    await expect(service.promote(SECOND_USER.id, AUTH_USER)).rejects.toThrow(
      ForbiddenException,
    );
  });

  it('must promote an incomplete user to admin when user with status admin request', async () => {
    const AUTH_USER = {
      ...USER_FIXTURE,
      id: 'AUTH_USER',
      role: ERole.ADMIN,
      status: EStatus.ACTIVE,
    };

    const FIRST_USER = {
      ...USER_FIXTURE,
      id: 'FIRST_USER',
      role: ERole.USER,
      status: EStatus.INCOMPLETE,
    };

    const SECOND_USER = {
      ...USER_FIXTURE,
      id: 'SECOND_USER',
      role: ERole.USER,
      status: EStatus.INCOMPLETE,
    };
    jest
      .spyOn(repository, 'findAndCount')
      .mockResolvedValueOnce([[FIRST_USER, SECOND_USER], 2]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(SECOND_USER);
    await expect(service.promote(SECOND_USER.id, AUTH_USER)).rejects.toThrow(
      BadRequestException,
    );
  });

  it('must promote an active user and role admin to admin when user with status admin request', async () => {
    const AUTH_USER = {
      ...USER_FIXTURE,
      id: 'AUTH_USER',
      role: ERole.ADMIN,
      status: EStatus.ACTIVE,
    };

    const FIRST_USER = {
      ...USER_FIXTURE,
      id: 'FIRST_USER',
      role: ERole.USER,
      status: EStatus.INCOMPLETE,
    };

    const SECOND_USER = {
      ...USER_FIXTURE,
      id: 'SECOND_USER',
      role: ERole.ADMIN,
      status: EStatus.ACTIVE,
    };
    jest
      .spyOn(repository, 'findAndCount')
      .mockResolvedValueOnce([[FIRST_USER, SECOND_USER], 2]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(SECOND_USER);
    await expect(service.promote(SECOND_USER.id, AUTH_USER)).rejects.toThrow(
      BadRequestException,
    );
  });
  it('must promote an active user and role admin to admin when user with status admin request error', async () => {
    const AUTH_USER = {
      ...USER_FIXTURE,
      id: 'AUTH_USER',
      role: ERole.ADMIN,
      status: EStatus.ACTIVE,
    };

    const FIRST_USER = {
      ...USER_FIXTURE,
      id: 'FIRST_USER',
      role: ERole.USER,
      status: EStatus.INCOMPLETE,
    };

    const SECOND_USER = {
      ...USER_FIXTURE,
      id: 'SECOND_USER',
      role: ERole.USER,
      status: EStatus.ACTIVE,
    };
    jest
      .spyOn(repository, 'findAndCount')
      .mockResolvedValueOnce([[FIRST_USER, SECOND_USER], 2]);
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(SECOND_USER);
    jest
      .spyOn(service, 'update')
      .mockRejectedValue(new InternalServerErrorException());
    await expect(service.promote(SECOND_USER.id, AUTH_USER)).rejects.toThrow(
      InternalServerErrorException,
    );
  });

  it('must remove an user by admin', async () => {
    const userRemoved = {
      ...USER_FIXTURE,
      status: EStatus.INACTIVE,
      deletedAt: new Date(),
    };
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(USER_FIXTURE);
    jest.spyOn(repository, 'save').mockResolvedValueOnce(userRemoved);
    expect(await service.remove(USER_FIXTURE.id)).toEqual({
      message: 'User with id USER_INCOMPLETE successfully removed',
    });
  });
});
