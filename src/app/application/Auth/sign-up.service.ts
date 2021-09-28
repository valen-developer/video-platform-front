import { Injectable } from '@angular/core';

import { AuthRepository } from 'src/app/domain/shared/interfaces/userRepository.interface';
import { IUuidGenerator } from '../../domain/shared/interfaces/UUIDGenerator.interface';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(
    private authRepository: AuthRepository,
    private uuidGenerator: IUuidGenerator,
    private router: Router
  ) {}

  public async createUser(
    email: string,
    name: string,
    password: string
  ): Promise<{ ok: boolean; error?: string }> {
    const uuid = this.uuidGenerator.generate();

    return this.authRepository
      .signup(email, name, password, uuid)
      .then((response) => {
        const { ok } = response;
        // if (ok) this.router.navigateByUrl('/auth/login');

        return response;
      });
  }
}
