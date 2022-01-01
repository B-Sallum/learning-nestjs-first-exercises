import { Controller, Get } from '@nestjs/common';
import { Ex05Service } from './ex05.service';

@Controller('05')
export class Ex05Controller {
  constructor(private readonly ex05Service: Ex05Service) {}

  @Get('higher')
  getHigher(): string {
    return this.ex05Service.showMeHigher(5664, 563356, 765);
  }
}
