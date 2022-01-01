import { Injectable } from '@nestjs/common';

@Injectable()
export class Ex07Service {
  checkSwimmer(number: number): string {
    const status =
      number < 5
        ? 'You are too young'
        : number < 8
        ? 'Infantil A'
        : number < 11
        ? 'Infantil B'
        : number < 14
        ? 'Juvenil A'
        : number < 18
        ? 'Juvenil B'
        : 'Adulto';
    return status;
  }
}
