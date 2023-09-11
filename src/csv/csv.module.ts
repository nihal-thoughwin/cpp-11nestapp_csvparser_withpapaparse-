import { Module } from '@nestjs/common';
import { CsvController } from './csv.contoller';
import { CsvService } from './csv.services';

@Module({
  imports: [],
  controllers: [CsvController],
  providers: [CsvService],
  exports: [],
})
export class CsvModule {}
