import { Controller, Get } from '@nestjs/common';
import { Ex03Service } from './ex03.service';

@Controller('03')
export class Ex03Controller {
  constructor(private readonly ex03Service: Ex03Service) {}

  @Get('CtoF')
  getCtoF(): string {
    return this.ex03Service.getCtoF(10);
  }

  @Get('CtoK')
  getCtoK(): string {
    return this.ex03Service.getCtoK(10);
  }
}
