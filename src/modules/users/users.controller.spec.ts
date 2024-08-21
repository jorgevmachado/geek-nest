import { Repository } from 'typeorm';

import { Test, TestingModule } from '@nestjs/testing';

import { PassportModule } from '@nestjs/passport';

import { USER_FIXTURE, userClean } from './users.fixture';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';

import { EStatus } from '@/enums/status.enum';

import { ERole } from '@/modules/users/users.enum';
import { Users } from './users.entity';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            promote: jest.fn(),
            remove: jest.fn(),
          },
        },
        { provide: getRepositoryToken(Users), useClass: Repository },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return users successfully with method get', async () => {
    const USER_CLEAN = userClean(USER_FIXTURE);
    jest.spyOn(service, 'findAll').mockResolvedValueOnce([USER_CLEAN]);
    const result = await controller.findAll({});
    expect(result).toEqual([USER_CLEAN]);
  });

  it('should return all users successfully with method get', async () => {
    const USERS_CLEAN = [
      userClean({
        ...USER_FIXTURE,
        status: EStatus.INACTIVE,
        deletedAt: new Date(),
      }),
    ];
    jest.spyOn(service, 'findAll').mockResolvedValueOnce(USERS_CLEAN);
    const result = await controller.findAll({ all: true });
    expect(result).toEqual(USERS_CLEAN);
  });

  it('should return user successfully with param id and method get', async () => {
    const USER_CLEAN_SUCCESSFULLY = userClean({
      ...USER_FIXTURE,
      id: 'USER_CLEAN_SUCCESSFULLY',
    });
    jest
      .spyOn(service, 'findOne')
      .mockResolvedValueOnce(USER_CLEAN_SUCCESSFULLY);
    const result = await controller.findOne(
      USER_FIXTURE,
      USER_CLEAN_SUCCESSFULLY.id,
      false,
    );
    expect(result).toEqual(USER_CLEAN_SUCCESSFULLY);
  });

  it('should return user removed successfully with param id and method get', async () => {
    const USER_CLEAN_REMOVED = userClean({
      ...USER_FIXTURE,
      id: 'USER_CLEAN_REMOVED',
      status: EStatus.INACTIVE,
      deletedAt: new Date(),
    });
    jest.spyOn(service, 'findOne').mockResolvedValueOnce(USER_CLEAN_REMOVED);
    const result = await controller.findOne(
      {
        ...USER_FIXTURE,
        role: ERole.ADMIN,
      },
      USER_CLEAN_REMOVED.id,
      true,
    );
    expect(result).toEqual(USER_CLEAN_REMOVED);
  });

  it('should return update user successfully with param id and method path', async () => {
    const USER_CLEAN_UPDATE_SUCCESSFULLY = userClean({
      ...USER_FIXTURE,
      id: 'USER_CLEAN_UPDATE_SUCCESSFULLY',
    });
    jest
      .spyOn(service, 'update')
      .mockResolvedValueOnce(USER_CLEAN_UPDATE_SUCCESSFULLY);
    const result = await controller.update(USER_FIXTURE, USER_FIXTURE.id, {
      cpf: USER_FIXTURE.cpf,
      name: USER_FIXTURE.name,
      gender: USER_FIXTURE.gender,
      dateOfBirth: USER_FIXTURE.dateOfBirth,
    });

    expect(result).toEqual(USER_CLEAN_UPDATE_SUCCESSFULLY);
  });

  it('should return promote user successfully with param id and method path', async () => {
    const response = {
      message: 'User promoted to administrator successfully',
    };
    jest.spyOn(service, 'promote').mockResolvedValueOnce(response);
    const result = await controller.promote(USER_FIXTURE, USER_FIXTURE.id);

    expect(result).toEqual(response);
  });

  it('should return delete user successfully with param id and method delete', async () => {
    const response = {
      message: 'User with id USER_INCOMPLETE successfully removed',
    };
    const USER_ADMIN = {
      ...USER_FIXTURE,
      id: 'USER_ADMIN',
      role: ERole.ADMIN,
    };
    jest.spyOn(service, 'remove').mockResolvedValueOnce(response);
    const result = await controller.remove(USER_ADMIN, USER_FIXTURE.id);
    expect(result).toEqual(response);
  });
});
