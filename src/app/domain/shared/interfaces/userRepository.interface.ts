import { User } from '../../User/user.model';

export abstract class AuthRepository {
  abstract signup(
    email: string,
    name: string,
    uuid: string
  ): Promise<{ ok: boolean; error?: string }>;

  abstract signin(
    email: string,
    password: string
  ): Promise<{ user?: User; token?: string; error?: string }>;

  abstract signinToken(token: string): Promise<User | null>;
}
