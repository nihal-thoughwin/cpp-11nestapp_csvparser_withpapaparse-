import {
  BadRequestException,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Csv2Service } from './csv2.services';

@Controller()
export class Csv2Controller {
  constructor(private readonly csv2Service: Csv2Service) {}

  @Get('getcsv2')
  getCsv2() {
    // return 'working';
    return this.csv2Service.getCsv2();
  }

  @Post('upload2')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    const csvData = file.buffer.toString(); // Convert file buffer to string

    const parsedData = this.csv2Service.parseCsvData(csvData, {
      complete: (result) => {
        // Process the parsed CSV data
        console.log(result.data);
      },
      header: true, // Set this if your CSV has headers
    });
  }
}
