import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { PassportModule } from '@nestjs/passport';
import { USER_FIXTURE, userClean } from './users.fixture';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { ERole, EStatus } from './users.interface';

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

  it('should be get success', async () => {
    const USER_CLEAN = userClean(USER_FIXTURE);
    jest.spyOn(service, 'findAll').mockResolvedValueOnce([USER_CLEAN]);
    const result = await controller.findAll({});
    expect(result).toEqual([USER_CLEAN]);
  });

  it('should be get success with user removed', async () => {
    const USER_CLEAN = userClean({
      ...USER_FIXTURE,
      status: EStatus.INACTIVE,
      deletedAt: new Date(),
    });
    jest.spyOn(service, 'findAll').mockResolvedValueOnce([USER_CLEAN]);
    const result = await controller.findAll({ all: true });
    expect(result).toEqual([USER_CLEAN]);
  });

  it('should be get with param id success', async () => {
    const USER_CLEAN = userClean(USER_FIXTURE);
    jest.spyOn(service, 'findOne').mockResolvedValueOnce(USER_CLEAN);
    const result = await controller.findOne(USER_FIXTURE, USER_CLEAN.id, false);
    expect(result).toEqual(USER_CLEAN);
  });

  it('should be get with param id success user removed', async () => {
    const USER_CLEAN = userClean({
      ...USER_FIXTURE,
      status: EStatus.INACTIVE,
      deletedAt: new Date(),
    });
    jest.spyOn(service, 'findOne').mockResolvedValueOnce(USER_CLEAN);
    const result = await controller.findOne(
      {
        ...USER_FIXTURE,
        role: ERole.ADMIN,
      },
      USER_CLEAN.id,
      false,
    );
    expect(result).toEqual(USER_CLEAN);
  });

  it('should be path with param id success', async () => {
    const updateUserDto: UpdateUserDto = {
      cpf: USER_FIXTURE.cpf,
      name: USER_FIXTURE.name,
      gender: USER_FIXTURE.gender,
      dateOfBirth: USER_FIXTURE.dateOfBirth,
    };
    const USER_CLEAN = userClean(USER_FIXTURE);
    jest.spyOn(service, 'update').mockResolvedValueOnce(USER_CLEAN);
    const result = await controller.update(
      USER_FIXTURE,
      USER_FIXTURE.id,
      updateUserDto,
    );

    expect(result).toEqual(USER_CLEAN);
  });

  it('should be path promote with param id success', async () => {
    const response = {
      message: 'User promoted to administrator successfully',
    };
    jest.spyOn(service, 'promote').mockResolvedValueOnce(response);
    const result = await controller.promote(USER_FIXTURE, USER_FIXTURE.id);

    expect(result).toEqual(response);
  });

  it('should be delete with param id success', async () => {
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
