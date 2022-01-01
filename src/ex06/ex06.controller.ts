import { Controller, Get } from '@nestjs/common';
import { Ex06Service } from './ex06.service';

@Controller('06')
export class Ex06Controller {
  constructor(private readonly ex06Service: Ex06Service) {}

  @Get('EvenOrOdd')
  getNumber(): string {
    return this.ex06Service.checkNumber(-0);
  }
}
