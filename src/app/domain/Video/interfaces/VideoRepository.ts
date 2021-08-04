import { SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

export abstract class VideoRepository {
  public abstract getVideo(uuid: string): Observable<SafeUrl>;
}
