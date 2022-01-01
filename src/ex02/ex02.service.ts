import { Injectable } from '@nestjs/common';

@Injectable()
export class Ex02Service {
  ascendingOrder(number: number[]): number[] {
    const newArray = number.sort((a, b) => {
      return a - b;
    });
    return newArray;
  }

  descendingOrder(number: number[]): number[] {
    const newArray = number.sort((a, b) => {
      return b - a;
    });
    return newArray;
  }
}
