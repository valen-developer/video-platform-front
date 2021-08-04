import { Injectable } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { VideoRepository } from 'src/app/domain/Video/interfaces/VideoRepository';

@Injectable({
  providedIn: 'root',
})
export class VideoGetterService {
  constructor(private videoRepository: VideoRepository) {}

  public getVideo(uuid: string): Observable<SafeUrl> {
    return this.videoRepository.getVideo(uuid);
  }
}
