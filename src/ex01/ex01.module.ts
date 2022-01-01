import { Module } from '@nestjs/common';
import { Ex01Service } from './ex01.service';
import { Ex01Controller } from './ex01.controller';

@Module({
  controllers: [Ex01Controller],
  providers: [Ex01Service],
  imports: [],
})
export class Ex01Module {}
