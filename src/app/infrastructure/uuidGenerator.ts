import { IUuidGenerator } from '../domain/shared/interfaces/UUIDGenerator.interface';

import { v4 } from 'uuid';

export class UUIDGenerator implements IUuidGenerator {
  public generate(): string {
    return v4();
  }
}
