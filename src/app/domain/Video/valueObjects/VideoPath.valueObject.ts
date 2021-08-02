import { NotNull } from '../../shared/NotNull';
import { ValueObject } from '../../shared/valueObjects/valueObject.interface';

export class VideoPath extends NotNull implements ValueObject {
  public readonly value: string;

  constructor(value: string) {
    super(value, 'video path');
    this.value = value;
  }
}
