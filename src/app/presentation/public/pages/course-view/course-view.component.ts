import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesGetterService } from 'src/app/application/Courses/courses-getter.service';
import { Course } from 'src/app/domain/Course/Course.model';

@Component({
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
})
export class CourseViewComponent implements OnInit {
  public course: Course;

  constructor(
    private route: ActivatedRoute,
    private courseGetter: CoursesGetterService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const { uuid } = params;
      if (uuid) this.getCourse(uuid);
    });
  }

  private getCourse(uuid: string): void {
    this.courseGetter.getCourseByUuid(uuid).subscribe((course) => {
      console.log(course);
      this.course = course;
    });
  }
}
