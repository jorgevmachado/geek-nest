import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

describe('UsersController', () => {
  let controller: UsersController;
  let repository: Repository<Users>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: getRepositoryToken(Users), useFactory: jest.fn },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    repository = await module.resolve(getRepositoryToken(Users));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
