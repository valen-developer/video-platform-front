import { User } from '../user.model';

export abstract class UserRepository {
  public abstract getAllUsers(): Promise<User[]>;
  public abstract deleteUser(userUuid: string): Promise<boolean>;
  public abstract toggleActivation(
    uuid: string,
    userUuid: string
  ): Promise<boolean>;
}
