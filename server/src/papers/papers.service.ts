import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePaperDto } from './dto/create-paper.dto';
import { UpdatePaperDto } from './dto/update-paper.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Paper } from './entities/paper.entity';

@Injectable()
export class PapersService {
  constructor(
    @InjectModel(Paper)
    private paperModel: typeof Paper,
  ) {}
  async create(createPaperDto: CreatePaperDto) {
    try {
      const paper = await this.paperModel.create(createPaperDto);
      return paper;
    } catch (error) {
      return new HttpException(
        'Не удалось создать документ!',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  findAll() {
    return `This action returns all papers`;
  }

  async findOne(id: string): Promise<Paper> {
    try {
      const paper = await this.paperModel.findByPk(id);
      if (!paper) {
        throw new HttpException(
          `Не удалось получить запись`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return paper;
    } catch (error) {
      throw new HttpException(
        'Ошибка при получении записи',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  update(id: string, updatePaperDto: UpdatePaperDto) {
    return `This action updates a #${id} paper`;
  }

  remove(id: string) {
    return `This action removes a #${id} paper`;
  }
}
