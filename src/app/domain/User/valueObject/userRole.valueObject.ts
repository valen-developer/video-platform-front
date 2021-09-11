import { NotNull } from '../../shared/NotNull';
import { ValueObject } from '../../shared/valueObjects/valueObject.interface';

export class UserROLE extends NotNull implements ValueObject {
  public readonly value: ROLE;

  constructor(value: ROLE) {
    super(value, 'user role');
    this.value = value;

    this.isValid();
  }

  private isValid(): void {
    this.isValidRole();
  }

  private isValidRole(): void {
    const validRoles: ROLE[] = ['ADMIN_ROLE', 'USER_ROLE'];
    const isValid = validRoles.includes(this.value);

    if (!isValid) throw new Error('role is not a valid role');
  }

  public isAdminRole(): boolean {
    return this.value === 'ADMIN_ROLE';
  }
}

export type ROLE = 'ADMIN_ROLE' | 'USER_ROLE';
