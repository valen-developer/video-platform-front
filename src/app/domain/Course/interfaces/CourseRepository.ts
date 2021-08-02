import { Observable } from 'rxjs';
import { Course } from '../Course.model';

export interface CourseRepository {
  getAll(): Observable<Course[]>;
  getCourse(uuid: string): Observable<Course>;
}
