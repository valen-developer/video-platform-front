import { Injectable } from '@angular/core';
import { UserRepository } from 'src/app/domain/User/interfaces/UserRepository.interface';
import { User } from 'src/app/domain/User/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserGetterService {
  constructor(private userRepository: UserRepository) {}

  public getAll(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}
