import { Module } from '@nestjs/common';
import { Ex09Service } from './ex09.service';
import { Ex09Controller } from './ex09.controller';

@Module({
  controllers: [Ex09Controller],
  providers: [Ex09Service],
})
export class Ex09Module {}
