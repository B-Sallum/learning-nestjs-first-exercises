import { Controller, Get } from '@nestjs/common';
import { Ex07Service } from './ex07.service';

@Controller('07')
export class Ex07Controller {
  constructor(private readonly ex07Service: Ex07Service) {}

  @Get('category')
  getCategory(): string {
    return this.ex07Service.checkSwimmer(4);
  }
}
