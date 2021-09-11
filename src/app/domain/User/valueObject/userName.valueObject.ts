import { NotNull } from '../../shared/NotNull';
import { ValueObject } from '../../shared/valueObjects/valueObject.interface';

export class UserName extends NotNull implements ValueObject {
  public readonly value: string;

  constructor(value: string) {
    super(value, 'user name');
    this.value = value;
  }
}
