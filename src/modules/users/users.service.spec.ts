import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ERole, EStatus } from './users.interface';
import {
  USER_INCOMPLETE,
  USER_INCOMPLETE_DTO,
  USERS_PAGINATE,
} from './users.fixture';
import { PAGINATE } from '../../fixtures';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

const usersClean = (users: Array<Users>) => {
  return users.map((user) => userClean(user));
};

const userClean = (user: Users) => {
  return {
    id: user.id,
    role: user.role,
    name: user.name,
    email: user.email,
    status: user.status,
    ...(user.status !== EStatus.INCOMPLETE && {
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
    }),
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    ...(user.deletedAt && { deletedAt: user.deletedAt }),
  };
};

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
    const user = USER_INCOMPLETE;
    jest.spyOn(repository, 'find').mockResolvedValueOnce([user]);
    expect(await service.findAll({})).toEqual(usersClean([user]));
  });

  it('must return the findOne method.', async () => {
    const user = USER_INCOMPLETE;
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(user);
    expect(await service.findOne(user.id)).toEqual(userClean(user));
  });

  it('must return the findOne method not found.', async () => {
    const user = USER_INCOMPLETE;
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
    await expect(service.findOne(user.id)).rejects.toThrow(NotFoundException);
  });

  it('must return the checkCredentials method failed.', async () => {
    const user = {
      ...USER_INCOMPLETE,
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

  it('must return the checkCredentials method success.', async () => {
    const user = USER_INCOMPLETE;
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
      getManyAndCount: jest.fn().mockResolvedValueOnce([[USER_INCOMPLETE], 1]),
    } as any);
    expect(
      await service.findAll({
        page: 1,
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
    jest.spyOn(repository, 'save').mockResolvedValueOnce(USER_INCOMPLETE);
    expect(await service.create(USER_INCOMPLETE_DTO)).toEqual(USER_INCOMPLETE);
  });

  it('must create an incomplete user with error', async () => {
    await expect(
      service.create({
        ...USER_INCOMPLETE_DTO,
        passwordConfirmation: '0',
      }),
    ).rejects.toThrow(InternalServerErrorException);
  });
});
