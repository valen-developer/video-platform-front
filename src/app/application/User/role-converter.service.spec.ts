import { TestBed } from '@angular/core/testing';

import { RoleConverterService } from './role-converter.service';

describe('RoleConverterService', () => {
  let service: RoleConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
