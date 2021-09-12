import { Injectable } from '@angular/core';

import { AuthRepository } from 'src/app/domain/shared/interfaces/userRepository.interface';
import { IUuidGenerator } from '../../domain/shared/interfaces/UUIDGenerator.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(
    private authRepository: AuthRepository,
    private uuidGenerator: IUuidGenerator
  ) {}

  public async createUser(
    email: string,
    name: string
  ): Promise<{ ok: boolean; error?: string }> {
    const uuid = this.uuidGenerator.generate();

    return this.authRepository.signup(email, name, uuid);
  }
}
