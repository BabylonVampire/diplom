import { Module } from '@nestjs/common';
import { ConverterService } from './converter.service';
import { ConverterController } from './converter.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Paper } from 'src/papers/entities/paper.entity';
import { PapersService } from 'src/papers/papers.service';
import { PapersModule } from 'src/papers/papers.module';

@Module({
  imports: [SequelizeModule.forFeature([Paper]), PapersModule],
  controllers: [ConverterController],
  providers: [ConverterService],
})
export class ConverterModule {}
