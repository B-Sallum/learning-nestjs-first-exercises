import { Injectable } from '@nestjs/common';

@Injectable()
export class Ex04Service {
  getAverage(number: number[]): string {
    const sum = number.reduce((a, b) => a + b);
    const avg = sum / number.length;
    const status =
      avg < 7 ? 'Disapproved. Try harder!' : 'Approved. Congrats :)';
    return `Your average is ${avg.toFixed(1)} and you are ${status}`;
  }
}
