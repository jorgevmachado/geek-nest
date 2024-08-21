import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { GetUserAuth } from './auth-user.decorator';
import { Users } from '../users/users.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  signUp(@Body() createAuthDto: CreateUserDto) {
    return this.authService.signUp(createAuthDto);
  }

  @Post('signIn')
  signIn(@Body() credentialsAuthDto: CredentialsAuthDto) {
    return this.authService.signIn(credentialsAuthDto);
  }

  @Get('me')
  @UseGuards(AuthGuard())
  getMe(@GetUserAuth() user: Users) {
    return user;
  }
}
