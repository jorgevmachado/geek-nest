import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';

import { ERole } from '@/enums/role.enum';

import {
  USER_ADMIN_FIXTURE,
  USER_COMPLETE_FIXTURE,
  USER_INCOMPLETE_FIXTURE,
} from './users/users.fixture';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  const signUpResponse = { message: 'Registration Completed Successfully!' };

  const removeResponse = {
    message:
      'User with id eaca4c08-e62d-495a-ae1c-918199da8d52 successfully removed',
  };

  const updateResponse = {
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
  };

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

  const findALLResponse = [findOneResponse];

  const promoteResponse = {
    message: 'User promoted to administrator successfully',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            signUp: jest.fn(),
            signIn: jest.fn(),
            removeUser: jest.fn().mockResolvedValueOnce(removeResponse),
            updateUser: jest.fn().mockResolvedValueOnce(updateResponse),
            promoteUser: jest.fn().mockResolvedValueOnce(promoteResponse),
            findOneUser: jest.fn().mockResolvedValueOnce(findOneResponse),
            findAllUsers: jest.fn().mockResolvedValueOnce(findALLResponse),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  // SIGN-UP ----------------------------------------------------------------------------------------------------- BEGIN
  it('should be post signUp success', async () => {
    jest.spyOn(service, 'signUp').mockResolvedValueOnce(signUpResponse);
    expect(
      await controller.signUp({
        cpf: USER_INCOMPLETE_FIXTURE.cpf,
        name: USER_INCOMPLETE_FIXTURE.name,
        email: USER_INCOMPLETE_FIXTURE.email,
        password: USER_INCOMPLETE_FIXTURE.password,
        dateOfBirth: USER_INCOMPLETE_FIXTURE.dateOfBirth,
        passwordConfirmation: USER_INCOMPLETE_FIXTURE.password,
      }),
    ).toEqual(signUpResponse);
  });

  it('should be post signUp error empty body', async () => {
    expect(
      await controller.signUp({
        cpf: '',
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        dateOfBirth: undefined,
      }),
    ).toEqual(undefined);
  });
  // SIGN-UP ------------------------------------------------------------------------------------------------------- END

  // SIGN-IN ----------------------------------------------------------------------------------------------------- BEGIN
  it('should be post signIn success', async () => {
    const response = { token: 'token' };
    jest.spyOn(service, 'signIn').mockResolvedValueOnce(response);
    expect(
      await controller.signIn({
        email: USER_COMPLETE_FIXTURE.email,
        password: USER_COMPLETE_FIXTURE.password,
      }),
    ).toEqual(response);
  });

  it('should be post signIn error', async () => {
    jest.spyOn(service, 'signIn').mockResolvedValueOnce(null);
    expect(
      await controller.signIn({
        email: USER_COMPLETE_FIXTURE.email,
        password: USER_COMPLETE_FIXTURE.password,
      }),
    ).toBeNull();
  });
  // SIGN-IN ------------------------------------------------------------------------------------------------------- END

  // ME ---------------------------------------------------------------------------------------------------------- BEGIN
  it('should be get me success', async () => {
    expect(controller.getMe(USER_COMPLETE_FIXTURE)).toEqual(
      USER_COMPLETE_FIXTURE,
    );
  });
  // ME ------------------------------------------------------------------------------------------------------------ END

  // FIND ALL ---------------------------------------------------------------------------------------------------- BEGIN
  it('should be get findAll success', async () => {
    expect(await controller.findAll({})).toEqual(findALLResponse);
  });
  // FIND ALL ------------------------------------------------------------------------------------------------------ END

  // FIND ONE ---------------------------------------------------------------------------------------------------- BEGIN
  it('should be get findOne success', async () => {
    expect(
      await controller.findOne(USER_ADMIN_FIXTURE, USER_INCOMPLETE_FIXTURE.id),
    ).toEqual(findOneResponse);
  });
  // FIND ONE ------------------------------------------------------------------------------------------------------ END

  // UPDATE ------------------------------------------------------------------------------------------------------ BEGIN
  it('should be patch update success', async () => {
    expect(
      await controller.update(USER_ADMIN_FIXTURE, USER_INCOMPLETE_FIXTURE.id, {
        cpf: USER_COMPLETE_FIXTURE.cpf,
        name: USER_COMPLETE_FIXTURE.name,
        role: ERole.ADMIN,
        email: USER_COMPLETE_FIXTURE.email,
        gender: USER_COMPLETE_FIXTURE.gender,
        dateOfBirth: USER_COMPLETE_FIXTURE.dateOfBirth,
      }),
    ).toEqual(updateResponse);
  });
  // UPDATE -------------------------------------------------------------------------------------------------------- END

  // REMOVE  ----------------------------------------------------------------------------------------------------- BEGIN
  it('should be delete remove success', async () => {
    expect(
      await controller.remove(USER_ADMIN_FIXTURE, USER_INCOMPLETE_FIXTURE.id),
    ).toEqual(removeResponse);
  });
  // REMOVE  ------------------------------------------------------------------------------------------------------- END

  // PROMOTE  ---------------------------------------------------------------------------------------------------- BEGIN
  it('should be patch promote success', async () => {
    expect(
      await controller.promote(USER_ADMIN_FIXTURE, USER_INCOMPLETE_FIXTURE.id),
    ).toEqual(promoteResponse);
  });
  // PROMOTE  ------------------------------------------------------------------------------------------------------ END
});
