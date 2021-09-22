import { TestBed } from '@angular/core/testing';

import { CourseUpdaterService } from './course-updater.service';

describe('CourseUpdaterService', () => {
  let service: CourseUpdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseUpdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
