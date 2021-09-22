import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CoursesGetterService } from 'src/app/application/Courses/courses-getter.service';
import { Course } from 'src/app/domain/Course/Course.model';

@Component({
  templateUrl: './courses-board.component.html',
  styleUrls: ['./courses-board.component.scss'],
})
export class CoursesBoardComponent implements OnInit {
  public courses: CourseItem[] = [];

  constructor(
    private courseGetter: CoursesGetterService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }

  private async getCourses(): Promise<void> {
    this.courseGetter.getAll().subscribe((courses) => {
      courses.forEach(async (c) => {
        if (c.imagePath)
          return this.courses.push(await this.buildCourseItem(c));

        this.courses.push({
          course: c,
        });
      });
    });
  }

  private async buildCourseItem(course: Course): Promise<CourseItem> {
    const imagePath = await this.courseGetter.getCourseImageAsDataUrl(
      course.imagePath
    );

    return {
      course,
      imageDataUrl: imagePath,
    };
  }
}

export interface CourseItem {
  course: Course;
  imageDataUrl?: SafeUrl | string;
}
