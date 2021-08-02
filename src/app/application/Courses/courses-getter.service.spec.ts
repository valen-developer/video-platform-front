import { TestBed } from '@angular/core/testing';

import { CoursesGetterService } from './courses-getter.service';

describe('CoursesGetterService', () => {
  let service: CoursesGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
