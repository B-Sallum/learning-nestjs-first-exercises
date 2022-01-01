import { Module } from '@nestjs/common';
import { Ex10Service } from './ex10.service';
import { Ex10Controller } from './ex10.controller';

@Module({
  controllers: [Ex10Controller],
  providers: [Ex10Service],
})
export class Ex10Module {}
