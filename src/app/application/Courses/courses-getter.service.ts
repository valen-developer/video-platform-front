import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/domain/Course/Course.model';
import { CourseRepository } from 'src/app/domain/Course/interfaces/CourseRepository';

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
}
