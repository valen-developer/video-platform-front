import { Component, Input, OnInit } from '@angular/core';
import { CourseItem } from '../../pages/courses-board/courses-board.component';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss'],
})
export class CoursesTableComponent implements OnInit {
  @Input()
  public courses: CourseItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
