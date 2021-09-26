import { Injectable } from '@angular/core';
import { UserRepository } from 'src/app/domain/User/interfaces/UserRepository.interface';

@Injectable({
  providedIn: 'root',
})
export class UserActivationService {
  constructor(private userRepository: UserRepository) {}

  public toggleActivation(uuid: string, userUuid: string): Promise<boolean> {
    return this.userRepository.toggleActivation(uuid, userUuid);
  }
}
