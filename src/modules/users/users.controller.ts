import { ApiBody, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { FilterUserDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { AuthGuard } from '@nestjs/passport';
import { AuthRoleGuards } from '../auth/auth-role.guards';
import { ERole } from '@/modules/users/users.enum';
import { GetUserAuth } from '../auth/auth-user.decorator';
import { Role } from '../auth/auth-role.decorator';

import { Users } from './users.entity';

@ApiTags('users')
@Controller('users')
@UseGuards(AuthGuard(), AuthRoleGuards)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Role(ERole.ADMIN)
  findAll(@Query() filter: FilterUserDto) {
    return this.usersService.findAll(filter);
  }

  @Get(':id')
  findOne(
    @GetUserAuth() user: Users,
    @Param('id') id: string,
    @Query() all: boolean,
  ) {
    if (all && user.role === ERole.ADMIN) {
      return this.usersService.findOne(id, user, all);
    }
    return this.usersService.findOne(id, user);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateUserDto })
  update(
    @GetUserAuth() user: Users,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto, user);
  }

  @Patch('promote/:id')
  promote(@GetUserAuth() user: Users, @Param('id') id: string) {
    return this.usersService.promote(id, user);
  }

  @Delete(':id')
  remove(@GetUserAuth() user: Users, @Param('id') id: string) {
    return this.usersService.remove(id, user);
  }
}
