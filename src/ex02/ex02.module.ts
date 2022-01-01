import { Module } from '@nestjs/common';
import { Ex02Service } from './ex02.service';
import { Ex02Controller } from './ex02.controller';

@Module({
  controllers: [Ex02Controller],
  providers: [Ex02Service],
})
export class Ex02Module {}
