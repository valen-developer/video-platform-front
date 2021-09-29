import { TestBed } from '@angular/core/testing';

import { UserDeleterService } from './user-deleter.service';

describe('UserDeleterService', () => {
  let service: UserDeleterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDeleterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
