import { Module } from '@nestjs/common';
import { PapersService } from './papers.service';
import { PapersController } from './papers.controller';
import { Paper } from './entities/paper.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Paper])],
  controllers: [PapersController],
  providers: [PapersService],
  exports: [PapersService],
})
export class PapersModule {}
