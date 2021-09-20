import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/domain/Course/Course.model';
import { CourseRepository } from 'src/app/domain/Course/interfaces/CourseRepository';
import { blobToUrl } from 'src/app/helpers/blobToDataurl';

@Injectable({
  providedIn: 'root',
})
export class CoursesGetterService {
  constructor(private courseRepository: CourseRepository) {}

  public getAll(): Observable<Course[]> {
    return this.courseRepository.getAll();
  }

  public getCourseByUuid(uuid: string): Observable<Course> {
    return this.courseRepository.getCourse(uuid);
  }

  public async getCourseImageAsDataUrl(imagePath: string): Promise<string> {
    return this.courseRepository.getCourseImage(imagePath).then((buffer) => {
      const blob = new Blob([buffer]);
      return blobToUrl(blob);
    });
  }
}
