import { Module } from '@nestjs/common';
import { Csv2Controller } from './csv2.contoller';
import { Csv2Service } from './csv2.services';

@Module({
  imports: [],
  controllers: [Csv2Controller],
  providers: [Csv2Service],
  exports: [],
})
export class Csv2Module {}
