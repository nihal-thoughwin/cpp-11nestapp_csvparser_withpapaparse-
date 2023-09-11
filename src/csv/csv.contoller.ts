import {
  BadRequestException,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import * as papa from 'papaparse';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { CsvService } from './csv.services';

@Controller()
export class CsvController {
  constructor(private readonly csvService: CsvService) {}

  @Get('getcsv')
  getCsv() {
    // return 'working';
    return this.csvService.getCsv();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    const csvData = file.buffer.toString(); // Convert file buffer to string

    papa.parse(csvData, {
      complete: (result) => {
        // Process the parsed CSV data
        console.log(result.data);
      },
      header: true, // Set this if your CSV has headers
    });
  }
}
