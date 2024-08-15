import { Module } from '@nestjs/common';
import { AbilityService } from './ability.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ability } from './ability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ability])],
  providers: [AbilityService],
  exports: [AbilityService],
})
export class AbilityModule {}
