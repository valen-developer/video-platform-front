import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBoardComponent } from './courses-board.component';

describe('CoursesBoardComponent', () => {
  let component: CoursesBoardComponent;
  let fixture: ComponentFixture<CoursesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
