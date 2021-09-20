import { Observable } from 'rxjs';
import { Course } from '../Course.model';

export abstract class CourseRepository {
  abstract getAll(): Observable<Course[]>;
  abstract getCourse(uuid: string): Observable<Course>;
  abstract getCourseImage(uuid: string): Promise<ArrayBuffer>;
}
