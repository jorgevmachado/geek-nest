import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthRoleGuards } from '../auth/auth-role.guards';
import { Role } from '../auth/auth-role.decorator';
import { GetUserAuth } from '../auth/auth-user.decorator';
import { Users } from './users.entity';
import { ERole } from '@/modules/users/users.enum';

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
    if (user.role !== ERole.ADMIN && user.id.toString() !== id) {
      throw new ForbiddenException(
        'You are not authorized to access this feature',
      );
    }
    if (all && user.role === ERole.ADMIN) {
      return this.usersService.findOne(id, true);
    }
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(
    @GetUserAuth() user: Users,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (user.role !== ERole.ADMIN && user.id.toString() !== id) {
      throw new ForbiddenException(
        'You are not authorized to access this feature',
      );
    }

    if (user.role !== ERole.ADMIN && updateUserDto.role) {
      throw new ForbiddenException(
        'You are not authorized to change the user role',
      );
    }

    return this.usersService.update(id, updateUserDto);
  }

  @Patch('promote/:id')
  promote(@GetUserAuth() user: Users, @Param('id') id: string) {
    return this.usersService.promote(id, user);
  }

  @Delete(':id')
  remove(@GetUserAuth() user: Users, @Param('id') id: string) {
    if (user.role !== ERole.ADMIN) {
      throw new ForbiddenException(
        'You are not authorized to access this feature',
      );
    }
    if (user.id === id) {
      throw new BadRequestException('You cannot delete yourself');
    }
    return this.usersService.remove(id);
  }
}
