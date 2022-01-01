import { Controller, Get } from '@nestjs/common';
import { Ex08Service } from './ex08.service';

@Controller('08')
export class Ex08Controller {
  constructor(private readonly ex08Service: Ex08Service) {}

  @Get('higher')
  getHigher(): string {
    return this.ex08Service.getMeHigher([144564577, 10456, 80, 567, 43568]);
  }
}
