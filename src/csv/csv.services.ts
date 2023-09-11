import { Injectable } from '@nestjs/common';

@Injectable()
export class CsvService {
  getCsv() {
    return 'csv file data fetched';
  }
}
