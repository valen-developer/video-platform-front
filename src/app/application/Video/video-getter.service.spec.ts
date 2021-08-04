import { TestBed } from '@angular/core/testing';

import { VideoGetterService } from './video-getter.service';

describe('VideoGetterService', () => {
  let service: VideoGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
