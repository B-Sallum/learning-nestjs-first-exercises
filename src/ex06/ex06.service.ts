import { Injectable } from '@nestjs/common';

@Injectable()
export class Ex06Service {
  checkNumber(number: number): string {
    const rest = number % 2;
    const evenOrOdd = rest === 0 ? `${number} is Even` : `${number} is an Odd`;
    const sign = Math.sign(number);
    console.log(sign);
    const charge =
      sign === 0
        ? ''
        : sign === 1
        ? 'and a positive number'
        : sign === -1
        ? 'and a negative number'
        : '';
    return `${evenOrOdd} ${charge}`;
  }
}
