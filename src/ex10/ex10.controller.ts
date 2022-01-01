import { Controller, Get } from '@nestjs/common';
import { Ex10Service } from './ex10.service';

@Controller('10')
export class Ex10Controller {
  constructor(private readonly ex10Service: Ex10Service) {}

  @Get('days')
  getDays(): string {
    return this.ex10Service.getMeDays(70, 0, 0);
  }
}
