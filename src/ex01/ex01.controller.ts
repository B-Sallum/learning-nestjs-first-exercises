import { Controller, Get } from '@nestjs/common';
import { Ex01Service } from './ex01.service';

@Controller('01')
export class Ex01Controller {
  constructor(private readonly ex01Service: Ex01Service) {}

  @Get('sum')
  getSum(): number {
    return this.ex01Service.doSum(3, 4);
  }
}
