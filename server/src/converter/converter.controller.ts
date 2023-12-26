import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConverterService } from './converter.service';

@Controller('converter')
export class ConverterController {
  constructor(private readonly converterService: ConverterService) {}

  @Get('/word/:id')
  downloadWord(@Param('id') id: string, @Query('ghostId') ghostId) {
    return this.converterService.downloadWord(id, ghostId);
  }

  @Get('/pdf/:id')
  downloadPDF(@Param('id') id: string, @Query('ghostId') ghostId) {
    return this.converterService.downloadPDF(id, ghostId);
  }
}
