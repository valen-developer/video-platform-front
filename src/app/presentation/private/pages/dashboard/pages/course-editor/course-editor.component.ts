import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CourseUpdaterService } from 'src/app/application/Courses/course-updater.service';
import { CoursesGetterService } from 'src/app/application/Courses/courses-getter.service';
import { Course } from 'src/app/domain/Course/Course.model';
import { blobToUrl } from 'src/app/helpers/blobToDataurl';

@Component({
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss'],
})
export class CourseEditorComponent implements OnInit {
  public course: Course;
  public image: SafeUrl | string;

  constructor(
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private courseGetter: CoursesGetterService,
    private courseUpdater: CourseUpdaterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { uuid } = params;
      if (uuid) this.getCourse(uuid);
    });
  }

  private getCourse(uuid: string): void {
    this.courseGetter.getCourseByUuid(uuid).subscribe((course) => {
      this.course = course;
      this.getImage(course.imagePath);
    });
  }

  private getImage(imagePath: string): void {
    if (!imagePath) return;
    this.courseGetter
      .getCourseImageAsDataUrl(imagePath)
      .then((image) => (this.image = image));
  }

  public onSelectCourseImage(file: File | Blob): void {
    this.courseUpdater
      .setCourseImage(this.course.uuid.value, file)
      .then(async (ok) => {
        if (ok) {
          const dataUrl = await blobToUrl(file);
          this.image = this.domSanitizer.bypassSecurityTrustUrl(dataUrl);
        }
      });
  }
}
