import { Module } from '@nestjs/common';
import { StatService } from './stat.service';

@Module({
  imports: [],
  providers: [StatService],
  exports: [StatService],
})
export class StatModule {}
