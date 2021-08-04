import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoRepository } from 'src/app/domain/Video/interfaces/VideoRepository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiVideoRepositoryService implements VideoRepository {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {}

  public getVideo(videoUuid: string): Observable<SafeUrl> {
    const params = new HttpParams().set('videoUuid', videoUuid);
    return this.http
      .get(`${this.apiUrl}/video`, { params, responseType: 'arraybuffer' })
      .pipe(
        map((video) => {
          const blob = new Blob([video], { type: 'video/mp4' });

          return this.domSanitizer.bypassSecurityTrustUrl(
            URL.createObjectURL(blob)
          );

          return video;
        })
      );
  }
}
