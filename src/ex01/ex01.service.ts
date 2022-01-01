import { Injectable } from '@nestjs/common';

@Injectable()
export class Ex01Service {
  doSum(num1: number, num2: number): number {
    return num1 + num2;
  }
}
