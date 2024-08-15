import { Module } from '@nestjs/common';
import { StatService } from './stat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stat } from './stat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stat])],
  providers: [StatService],
  exports: [StatService],
})
export class StatModule {}
