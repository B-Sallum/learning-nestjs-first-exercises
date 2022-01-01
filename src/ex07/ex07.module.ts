import { Module } from '@nestjs/common';
import { Ex07Service } from './ex07.service';
import { Ex07Controller } from './ex07.controller';

@Module({
  controllers: [Ex07Controller],
  providers: [Ex07Service],
})
export class Ex07Module {}
