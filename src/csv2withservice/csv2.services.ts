import { Injectable } from '@nestjs/common';
import * as papa from 'papaparse';

@Injectable()
export class Csv2Service {
  getCsv2() {
    return 'csv2 file data fetched';
  }

  parseCsvData(csvData: string, options: papa.ParseConfig): any {
    console.log('csv2');
    return papa.parse(csvData, options);
  }
}
