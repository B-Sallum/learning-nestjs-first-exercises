import { Injectable } from '@nestjs/common';

@Injectable()
export class Ex05Service {
  showMeHigher(num1: number, num2: number, num3: number): string {
    const first = num1 > num2 ? num1 : num2;
    const higher = first > num3 ? first : num3;
    return `The Higher is ${higher}`;
  }
}
