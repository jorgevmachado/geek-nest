import { Module } from '@nestjs/common';
import { MoveService } from './move.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Move } from './move.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Move])],
  providers: [MoveService],
  exports: [MoveService],
})
export class MoveModule {}
