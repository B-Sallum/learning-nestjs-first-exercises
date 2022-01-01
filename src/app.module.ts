import { Module } from '@nestjs/common';
import { Ex01Module } from './ex01/ex01.module';
import { Ex02Module } from './ex02/ex02.module';
import { Ex03Module } from './ex03/ex03.module';
import { Ex04Module } from './ex04/ex04.module';
import { Ex05Module } from './ex05/ex05.module';
import { Ex06Module } from './ex06/ex06.module';
import { Ex07Module } from './ex07/ex07.module';
import { Ex08Module } from './ex08/ex08.module';
import { Ex09Module } from './ex09/ex09.module';
import { Ex10Module } from './ex10/ex10.module';

@Module({
  imports: [
    Ex01Module,
    Ex02Module,
    Ex03Module,
    Ex04Module,
    Ex05Module,
    Ex06Module,
    Ex07Module,
    Ex08Module,
    Ex09Module,
    Ex10Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
