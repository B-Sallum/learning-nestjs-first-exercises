import { Module } from '@nestjs/common';
import { Ex04Service } from './ex04.service';
import { Ex04Controller } from './ex04.controller';

@Module({
  controllers: [Ex04Controller],
  providers: [Ex04Service],
})
export class Ex04Module {}
