import { Controller, Get } from '@nestjs/common';
import { Ex09Service } from './ex09.service';

@Controller('09')
export class Ex09Controller {
  constructor(private readonly ex09Service: Ex09Service) {}

  @Get('hours')
  getMeHours(): string {
    return this.ex09Service.getMeHours(7201);
  }
}
