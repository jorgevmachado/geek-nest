import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { ERole } from '@/enums/role.enum';

import { AuthRoleGuards } from '@/modules/auth/auth-role.guards';
import { Users } from '@/modules/auth/users/users.entity';

import { AuthService } from './auth.service';
import { GetUserAuth } from './auth-user.decorator';
import { Role } from './auth-role.decorator';

import { CreateAuthDto } from './dto/create-auth.dto';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { FilterAuthDto } from './dto/filter-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  signUp(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signUp(createAuthDto);
  }

  @Post('signIn')
  signIn(@Body() credentialsAuthDto: CredentialsAuthDto) {
    return this.authService.signIn(credentialsAuthDto);
  }

  @Get('me')
  @UseGuards(AuthGuard())
  getMe(@GetUserAuth() user: Users) {
    return this.authService.cleanUser(user);
  }

  @Get('users')
  @UseGuards(AuthGuard(), AuthRoleGuards)
  @Role(ERole.ADMIN)
  findAll(@Query() filter: FilterAuthDto) {
    return this.authService.findAllUsers(filter);
  }

  @Get(':id')
  @UseGuards(AuthGuard(), AuthRoleGuards)
  findOne(@GetUserAuth() user: Users, @Param('id') id: string) {
    return this.authService.findOneUser(id, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard(), AuthRoleGuards)
  update(
    @GetUserAuth() user: Users,
    @Param('id') id: string,
    @Body() updateAuthDto: UpdateAuthDto,
  ) {
    return this.authService.updateUser(id, updateAuthDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard(), AuthRoleGuards)
  @Role(ERole.ADMIN)
  remove(@GetUserAuth() user: Users, @Param('id') id: string) {
    return this.authService.removeUser(id, user);
  }

  @Patch('promote/:id')
  @UseGuards(AuthGuard(), AuthRoleGuards)
  promote(@GetUserAuth() user: Users, @Param('id') id: string) {
    return this.authService.promoteUser(id, user);
  }
}
