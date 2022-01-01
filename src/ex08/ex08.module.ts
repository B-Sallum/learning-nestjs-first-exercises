import { Module } from '@nestjs/common';
import { Ex08Service } from './ex08.service';
import { Ex08Controller } from './ex08.controller';

@Module({
  controllers: [Ex08Controller],
  providers: [Ex08Service],
})
export class Ex08Module {}
