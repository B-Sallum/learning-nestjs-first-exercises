import { Injectable } from '@nestjs/common';

@Injectable()
export class Ex09Service {
  getMeHours(number: number): string {
    const h = Math.floor(number / 3600);
    const restH = number % 3600;
    const m = Math.floor(restH / 60);
    const s = restH % 60;
    return `${h} hours ${m} minutes and ${s}`;
  }
}
