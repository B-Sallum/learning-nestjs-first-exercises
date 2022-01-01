import { Module } from '@nestjs/common';
import { Ex03Service } from './ex03.service';
import { Ex03Controller } from './ex03.controller';

@Module({
  controllers: [Ex03Controller],
  providers: [Ex03Service],
})
export class Ex03Module {}
