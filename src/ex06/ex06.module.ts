import { Module } from '@nestjs/common';
import { Ex06Service } from './ex06.service';
import { Ex06Controller } from './ex06.controller';

@Module({
  controllers: [Ex06Controller],
  providers: [Ex06Service],
})
export class Ex06Module {}
