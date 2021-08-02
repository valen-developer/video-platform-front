import { Component, OnInit } from '@angular/core';
import { CoursesGetterService } from 'src/app/application/Courses/courses-getter.service';
import { Course } from 'src/app/domain/Course/Course.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public courses: Course[] = [];

  constructor(private courseGetterService: CoursesGetterService) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  private getAllCourses(): void {
    this.courseGetterService.getAll().subscribe((courses) => {
      this.courses = courses;
    });
  }
}
