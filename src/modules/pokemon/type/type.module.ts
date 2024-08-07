import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  providers: [TypeService],
  exports: [TypeService],
})
export class TypeModule {}
