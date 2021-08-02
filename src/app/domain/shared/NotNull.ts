export class NotNull {
  constructor(value: any, entity: string) {
    this.isNull(value, entity);
  }

  protected isNull(value: any, entity: string): void {
    const isNull = value ? false : true;

    if (isNull) throw new Error(`${entity} shouldn´t be null`);
  }
}
