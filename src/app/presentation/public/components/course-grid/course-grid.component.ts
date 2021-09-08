import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/Course/Course.model';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss'],
})
export class CourseGridComponent implements OnInit {
  @Input() public courses: Course[] = [];
  @Input() public title = 'Cursos';

  constructor() {}

  ngOnInit(): void {}
}
