import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { Subscription } from 'rxjs';

import { CoursesGetterService } from 'src/app/application/Courses/courses-getter.service';
import { CinemaModeService } from 'src/app/application/shared/cinema-mode.service';
import { VideoGetterService } from 'src/app/application/Video/video-getter.service';
import { Course } from 'src/app/domain/Course/Course.model';
import { CourseSection } from 'src/app/domain/CourseSection/CourseSection.model';
import { Video } from 'src/app/domain/Video/video.model';

@Component({
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
})
export class CourseViewComponent implements OnInit, AfterViewInit, OnDestroy {
  public course: Course;
  public selectedVideo: Video;
  public currentSection: CourseSection;
  public videoUrl: SafeUrl;

  public isCinemaMode = false;
  public isCinemaModeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private cinemaModeService: CinemaModeService,
    private courseGetter: CoursesGetterService,
    private videoGetter: VideoGetterService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const { uuid } = params;
      if (uuid) this.getCourse(uuid);
    });
  }

  ngAfterViewInit(): void {
    this.isCinemaModeSubscription =
      this.cinemaModeService.isCinemaMode$.subscribe((isCinemaMode) => {
        this.isCinemaMode = isCinemaMode;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.isCinemaModeSubscription.unsubscribe();
  }

  private getCourse(uuid: string): void {
    this.courseGetter.getCourseByUuid(uuid).subscribe((course) => {
      this.course = course;

      this.selectedVideo = this.course?.sections[0]?.videos[0];
      this.currentSection = this.course?.sections[0];

      this.selectedVideo = this.selectedVideo ?? this.course?.videos[0];
      this.getVideo();
    });
  }

  public selectVideo(data: { video: Video; section: CourseSection }): void {
    const { video, section } = data;
    this.selectedVideo = video;
    this.currentSection = section;

    this.getVideo();
  }

  public getVideo() {
    this.videoUrl = null;
    this.videoGetter
      .getVideo(this.selectedVideo.uuid.value)
      .subscribe((data: SafeUrl) => {
        this.videoUrl = data;
      });
  }

  public nextVideo(): void {
    const sectionIndex = this.course.sections?.findIndex(
      (s) => s.uuid === this.currentSection?.uuid
    );

    // have section
    if (sectionIndex !== -1) {
      const videoIndex = this.currentSection.videos.findIndex(
        (v) => v.uuid === this.selectedVideo.uuid
      );

      const isLastVideoOfSection =
        videoIndex === this.currentSection.videos.length - 1;

      if (!isLastVideoOfSection) {
        this.selectedVideo = this.currentSection.videos[videoIndex + 1];
        this.getVideo();
      }

      if (isLastVideoOfSection) {
        const isLastSection = sectionIndex === this.course.sections.length - 1;

        if (!isLastSection) {
          this.currentSection = this.course.sections[sectionIndex + 1];
          this.selectedVideo = this.currentSection.videos[0];
          this.getVideo();
        }
      }
      return;
    }

    // No Have Section
    const videoIndex = this.course.videos.findIndex(
      (v) => v.uuid === this.selectedVideo.uuid
    );

    const isLastVideo = videoIndex === this.course.videos.length - 1;

    if (!isLastVideo) {
      this.selectedVideo = this.course.videos[videoIndex + 1];
      this.getVideo();
    }
  }
}
