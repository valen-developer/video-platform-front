import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRepository } from 'src/app/domain/shared/interfaces/userRepository.interface';
import { User, UserObject } from 'src/app/domain/User/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiAuthRepositoryService implements AuthRepository {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public async signup(
    email: string,
    name: string,
    password: string,
    uuid: string
  ): Promise<{ ok: boolean; error: string }> {
    return await this.http
      .post<{
        ok: boolean;
        error: string;
      }>(`${this.apiUrl}/signup`, { email, name, password, uuid })
      .toPromise();
  }

  public async signin(
    email: string,
    password: string
  ): Promise<{ user?: User; error?: string; token?: string }> {
    const response = await this.http
      .post<SinginInterface>(`${this.apiUrl}/signin`, { email, password })
      .toPromise();

    const { ok, user, token, error } = response;

    if (!ok) return { error };

    return {
      user: new User(
        user.uuid,
        user.name,
        user.email,
        user.role,
        user.validated
      ),
      token,
    };
  }

  public async signinToken(token: string): Promise<User | null> {
    const headers = new HttpHeaders().set('token', token);

    const { user, ok } = await this.http
      .post<{ user: UserObject; ok: boolean }>(`${this.apiUrl}/signin/token`, {
        headers,
      })
      .toPromise();

    if (!ok) return null;

    return new User(
      user.uuid,
      user.name,
      user.email,
      user.role,
      user.validated
    );
  }
}

interface SinginInterface {
  ok: boolean;
  user?: UserObject;
  token?: string;
  error?: string;
}
