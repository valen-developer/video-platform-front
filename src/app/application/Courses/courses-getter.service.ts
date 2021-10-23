import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/domain/Course/Course.model';
import { CourseRepository } from 'src/app/domain/Course/interfaces/CourseRepository';
import { blobToUrl } from 'src/app/helpers/blobToDataurl';

@Injectable({
  providedIn: 'root',
})
export class CoursesGetterService {
  constructor(
    private courseRepository: CourseRepository,
    private domSanitizer: DomSanitizer
  ) {}

  public getAll(): Observable<Course[]> {
    return this.courseRepository
      .getAll()
      .pipe(map((courses) => courses.filter((c) => c.duration.value > 0)));
  }

  public getCourseByUuid(uuid: string): Observable<Course> {
    return this.courseRepository.getCourse(uuid);
  }

  public async getCourseImageAsDataUrl(
    imagePath: string
  ): Promise<string | SafeUrl> {
    return this.courseRepository
      .getCourseImage(imagePath)
      .then(async (buffer) => {
        const blob = new Blob([buffer]);
        const dataUrl = await blobToUrl(blob);
        return this.domSanitizer.bypassSecurityTrustUrl(dataUrl);
      })
      .catch(() => null);
  }
}
