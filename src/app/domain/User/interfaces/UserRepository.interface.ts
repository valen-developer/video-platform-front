import { User } from '../user.model';

export abstract class UserRepository {
  public abstract getAllUsers(): Promise<User[]>;
}
