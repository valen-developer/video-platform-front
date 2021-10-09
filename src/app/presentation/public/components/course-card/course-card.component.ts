import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { CoursesGetterService } from 'src/app/application/Courses/courses-getter.service';
import { Course } from 'src/app/domain/Course/Course.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() public course: Course;

  public title = 'Sin titulo';
  public imageUrl: string | SafeUrl =
    '../../../../../assets/images/no-image.jpg';
  public duration = '';

  constructor(private courseGetter: CoursesGetterService) {}

  ngOnInit(): void {
    this.setCourseInfo();
    this.getCourseImage();
  }

  private setCourseInfo(): void {
    if (!this.course) return;

    this.title = this.course.title?.value;
    this.duration = this.course.duration?.formatToString();
  }

  private getCourseImage(): void {
    if (!this.course) return;

    this.courseGetter
      .getCourseImageAsDataUrl(this.course.imagePath)
      .then((img) => {
        if (img) this.imageUrl = img;
      });
  }
}
