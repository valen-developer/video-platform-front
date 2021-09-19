import { Component, Input, OnInit } from '@angular/core';
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
  public imageUrl = '../../../../../assets/images/no-image.jpg';
  public duration = '';

  constructor() {}

  ngOnInit(): void {
    this.setCourseInfo();
  }

  get image(): string {
    const apiUrl = environment.apiUrl + '/course/poster';

    const image = this.course.imagePath
      ? `${apiUrl}?image=${this.course.imagePath}`
      : this.imageUrl;

    return image;
  }

  private setCourseInfo(): void {
    if (!this.course) return;

    this.title = this.course.title?.value;
    this.duration = this.course.duration?.formatToString();
  }
}
