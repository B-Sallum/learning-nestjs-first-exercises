import { Controller, Get } from '@nestjs/common';
import { Ex02Service } from './ex02.service';

const array = [45, 786, 1234, 5, 56, 42355];

@Controller('02')
export class Ex02Controller {
  constructor(private readonly ex02Service: Ex02Service) {}

  @Get('ascendingOrder')
  getAscendingOrder(): number[] {
    return this.ex02Service.ascendingOrder(array);
  }

  @Get('descendingOrder')
  getDescendingOrder(): number[] {
    return this.ex02Service.descendingOrder(array);
  }
}
