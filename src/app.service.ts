import { Injectable } from '@nestjs/common';

@Injectable()
@Injectable()
export class AppService {
  getPage() {
    return 'working properly deployed in vercel';
  }
}
