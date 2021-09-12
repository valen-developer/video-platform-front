import { UUID } from '../shared/valueObjects/uuid.valueObject';
import { UserEmail } from './valueObject/userEmail.valueObject';
import { UserName } from './valueObject/userName.valueObject';
import { ROLE, UserROLE } from './valueObject/userRole.valueObject';

export class User {
  public readonly uuid: UUID;
  public readonly name: UserName;
  public readonly email: UserEmail;

  private _role: UserROLE;
  private _validated = false;

  constructor(
    uuid: string,
    name: string,
    email: string,
    role: ROLE,
    validated = false
  ) {
    this.uuid = new UUID(uuid);
    this.name = new UserName(name);
    this.email = new UserEmail(email);
    this._role = new UserROLE(role);
    this._validated = validated;
  }

  get validated(): boolean {
    return this._validated;
  }
  get role(): UserROLE {
    return this._role;
  }

  public toObject(): UserObject {
    return {
      uuid: this.uuid.value,
      name: this.name.value,
      email: this.email.value,
      role: this._role.value,
      validated: this.validated,
    };
  }

  public validate(): void {
    this._validated = true;
  }

  public inValidate(): void {
    this._validated = false;
  }
}

export interface UserObject {
  uuid: string;
  name: string;
  email: string;
  role: ROLE;
  validated: boolean;
}
