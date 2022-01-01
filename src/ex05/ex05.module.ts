import { Module } from '@nestjs/common';
import { Ex05Service } from './ex05.service';
import { Ex05Controller } from './ex05.controller';

@Module({
  controllers: [Ex05Controller],
  providers: [Ex05Service],
})
export class Ex05Module {}
