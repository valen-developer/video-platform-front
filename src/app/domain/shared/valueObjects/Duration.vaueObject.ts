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
      const minutes = roundUp((h % 1) * 60, 0);

      const hourString =
        `${hours} horas ` + (minutes > 0 ? `${minutes} min` : '');

      return hourString;
    }

    if (s >= 60) {
      const minutes = Math.floor(m);
      return `${minutes} minutos`;
    }

    return `${s} segundos`;
  }
}
