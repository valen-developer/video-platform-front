import { roundUp } from 'src/app/helpers/roundUp';
import { ValueObject } from './valueObject.interface';

export class Duration implements ValueObject {
  public readonly value: number;

  constructor(value = 0) {
    this.value = value;
  }

  public formatToString(): string {
    const s = this.value;
    const m = s / 60;
    const h = m / 60;

    if (m >= 60) {
      const hours = Math.floor(h);
      const minutes = roundUp(hours % 1, 2) * 60;
      return `${hours} horas, ${minutes} minutos`;
    }

    if (s >= 60) {
      const minutes = Math.floor(m);
      const seconds = roundUp(minutes % 1, 2) * 60;
      return `${minutes} minutos, ${seconds} segundos`;
    }

    return `${s} segundos`;
  }
}
