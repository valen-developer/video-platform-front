import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditorImageComponent } from './course-editor-image.component';

describe('CourseEditorImageComponent', () => {
  let component: CourseEditorImageComponent;
  let fixture: ComponentFixture<CourseEditorImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseEditorImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
