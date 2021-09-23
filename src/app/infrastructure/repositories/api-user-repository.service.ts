import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserRepository } from 'src/app/domain/User/interfaces/UserRepository.interface';
import { User, UserObject } from 'src/app/domain/User/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiUserRepositoryService implements UserRepository {
  private apiUrl = environment.apiUrl + '/user';

  constructor(private http: HttpClient) {}

  public getAllUsers(): Promise<User[]> {
    return this.http
      .get<{ ok: boolean; users: UserObject[] }>(`${this.apiUrl}/all`)
      .pipe(
        map(({ users }) =>
          users.map(
            (u) => new User(u.uuid, u.name, u.email, u.role, u.validated)
          )
        )
      )
      .toPromise();
  }
}
