import { NotNull } from '../../shared/NotNull';
import { ValueObject } from '../../shared/valueObjects/valueObject.interface';

export class CourseSectionTitle extends NotNull implements ValueObject {
  public readonly value: string;

  constructor(value: string) {
    super(value, 'section title');
    this.value = value;
  }

  private formatTitle(value: string): string {
    const title = value.replace(/\d/g, '');
    return title;
  }
}
