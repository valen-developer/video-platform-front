import { TestBed } from '@angular/core/testing';

import { ApiVideoRepositoryService } from './api-video-repository.service';

describe('ApiVideoRepositoryService', () => {
  let service: ApiVideoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVideoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
