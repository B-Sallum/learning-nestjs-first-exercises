import { Injectable } from '@nestjs/common';

@Injectable()
export class Ex08Service {
  getMeHigher(number: number[]): string {
    const array = number;
    const higher = Math.max(...array);
    return `${higher} is higher`;
  }
}
