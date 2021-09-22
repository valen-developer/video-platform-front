import { Injectable } from '@angular/core';
import { CourseRepository } from 'src/app/domain/Course/interfaces/CourseRepository';

@Injectable({
  providedIn: 'root',
})
export class CourseUpdaterService {
  constructor(private courseRepository: CourseRepository) {}

  public setCourseImage(uuid: string, file: File | Blob): Promise<boolean> {
    return this.courseRepository.setCourseImage(uuid, file);
  }
}
