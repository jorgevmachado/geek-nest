import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Move } from './move.entity';
import { MoveService } from './move.service';

@Module({
  imports: [TypeOrmModule.forFeature([Move])],
  providers: [MoveService],
  exports: [MoveService],
})
export class MoveModule {}
