import { TestBed } from '@angular/core/testing';

import { ApiCourseRepositoryService } from './api-course-repository.service';

describe('ApiCourseRepositoryService', () => {
  let service: ApiCourseRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCourseRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
