import { Controller, Get } from '@nestjs/common';
import { Ex04Service } from './ex04.service';

@Controller('04')
export class Ex04Controller {
  constructor(private readonly ex04Service: Ex04Service) {}
  @Get('avg')
  getAvg(): string {
    return this.ex04Service.getAverage([0, 10, 10]);
  }
}
