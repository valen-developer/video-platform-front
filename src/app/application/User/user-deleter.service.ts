import { Injectable } from '@angular/core';
import { UserRepository } from 'src/app/domain/User/interfaces/UserRepository.interface';

@Injectable({
  providedIn: 'root',
})
export class UserDeleterService {
  constructor(private userRepository: UserRepository) {}

  public delete(userUuid: string): Promise<boolean> {
    return this.userRepository.deleteUser(userUuid);
  }
}
