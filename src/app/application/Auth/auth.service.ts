import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AuthRepository } from 'src/app/domain/shared/interfaces/userRepository.interface';
import { User } from 'src/app/domain/User/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoginSubject: BehaviorSubject<boolean>;
  public isLogin$: Observable<boolean>;
  public isUserLogin = false;

  private userSubject: BehaviorSubject<User | null>;
  public user$: Observable<User>;
  public user: User | null = null;

  constructor(private authRepository: AuthRepository) {
    this.userSubject = new BehaviorSubject<User | null>(this.user);
    this.user$ = this.userSubject.asObservable();

    this.isLoginSubject = new BehaviorSubject<boolean>(this.isUserLogin);
    this.isLogin$ = this.isLoginSubject.asObservable();
  }

  /**
   *
   * @param email user email
   * @param password user password
   * @returns true|false. If user is valid or not
   */
  public async login(email: string, password: string): Promise<boolean> {
    const { token, user } = await this.authRepository.signin(email, password);

    if (!token) return false;

    this.setToken(token);
    this.setUser(user);

    return true;
  }

  /**
   * Log out the user
   */
  public logout(): void {
    this.setUser(null);
    this.setToken(null);
  }

  private setUser(user: User | null): void {
    this.isUserLogin = user ? true : false;
    this.user = user;
    this.userSubject.next(this.user);
    this.isLoginSubject.next(this.isUserLogin);
  }

  private setToken(token: string | null): void {
    if (!token) return localStorage.removeItem('token');
    localStorage.setItem('token', token);
  }
}
