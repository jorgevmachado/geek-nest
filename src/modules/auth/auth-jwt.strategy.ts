import { ExtractJwt, Strategy } from 'passport-jwt';

import { Repository } from 'typeorm';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PassportStrategy } from '@nestjs/passport';
import { Users } from '@/modules/auth/users/users.entity';

@Injectable()
export class AuthJwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Users)
    private repository: Repository<Users>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'super-secret',
    });
  }

  async validate(payload: { id: string }) {
    const user = await this.repository.findOne({ where: { id: payload.id } });

    if (!user) {
      throw new UnauthorizedException('User not found!');
    }

    return user;
  }
}
