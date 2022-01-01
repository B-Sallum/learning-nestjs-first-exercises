import { Injectable } from '@nestjs/common';

@Injectable()
export class Ex03Service {
  getCtoF(number: number): string {
    return `${number} °C correspond to ${number * 1.8 + 32} °F`;
  }

  getCtoK(number: number): string {
    return `${number} °C correspond to ${number + 273.15} K`;
  }
}
