import { Injectable } from '@nestjs/common';

@Injectable()
export class Ex10Service {
  getMeDays(years: number, months: number, days: number): string {
    const daysY = years * 365;
    const daysM = Math.floor(months * 30.41);
    return `You have ${years}, ${months} months and ${days} days, in a total of ${
      daysY + daysM + days
    } days`;
  }
}
