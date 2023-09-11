import { Module } from '@nestjs/common';
import { CsvModule } from './csv/csv.module';
import { Csv2Module } from './csv2withservice/csv2.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CsvModule, Csv2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
