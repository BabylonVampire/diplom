import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PapersService } from 'src/papers/papers.service';

@Injectable()
export class ConverterService {
  constructor(private papersService: PapersService) {}
  async convertToWord(id: string) {
    try {
      const paper = await this.papersService.findOne(id);
      if (!paper) {
        throw new HttpException(
          'Такой записи не найдено',
          HttpStatus.NOT_FOUND,
        );
      }
      //
    } catch (error) {
      throw new HttpException(
        'Ошибка при конвертации в формат .docx',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
  async convertToPDF(id: string) {
    const paper = await this.papersService.findOne(id);
    try {
      if (!paper) {
        throw new HttpException(
          'Такой записи не найдено',
          HttpStatus.NOT_FOUND,
        );
      }
      //
    } catch (error) {
      throw new HttpException(
        'Ошибка при конвертации в формат .pdf',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
  async downloadWord(id: string, ghostId: string) {
    try {
      const document = await this.convertToWord(id);
      return document;
    } catch (error) {
      throw new HttpException(
        'Ошибка при загрузке',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
  async downloadPDF(id: string, ghostId: string) {
    try {
      const document = await this.convertToPDF(id);
      return document;
    } catch (error) {
      throw new HttpException(
        'Ошибка при загрузке',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
}
