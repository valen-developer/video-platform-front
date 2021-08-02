import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course, CourseObject } from 'src/app/domain/Course/Course.model';
import { CourseRepository } from 'src/app/domain/Course/interfaces/CourseRepository';
import {
  CourseSection,
  CourseSectionObject,
} from 'src/app/domain/CourseSection/CourseSection.model';
import { Video, VideoObject } from 'src/app/domain/Video/video.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiCourseRepositoryService implements CourseRepository {
  private apiUrl = `${environment.apiUrl}/course`;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Course[]> {
    return this.http.get<any>(`${this.apiUrl}/all`).pipe(
      map((response: { ok: boolean; courses: CourseObject[] }) => {
        const { courses } = response;

        return courses.map((c) => {
          return new Course({ ...c });
        });
      })
    );
  }

  public getCourse(uuid: string): Observable<Course> {
    return this.http
      .get(`${this.apiUrl}?courseUuid=${uuid}`)
      .pipe(map((c: CourseObject) => new Course({ ...c })));
  }
}
