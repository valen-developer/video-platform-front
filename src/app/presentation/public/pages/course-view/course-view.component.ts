import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CoursesGetterService } from 'src/app/application/Courses/courses-getter.service';
import { VideoGetterService } from 'src/app/application/Video/video-getter.service';
import { Course } from 'src/app/domain/Course/Course.model';
import { Video } from 'src/app/domain/Video/video.model';

@Component({
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
})
export class CourseViewComponent implements OnInit {
  public course: Course;
  public selectedVideo: Video;
  public videoUrl: SafeUrl;

  constructor(
    private route: ActivatedRoute,
    private courseGetter: CoursesGetterService,
    private videoGetter: VideoGetterService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const { uuid } = params;
      if (uuid) this.getCourse(uuid);
    });
  }

  private getCourse(uuid: string): void {
    this.courseGetter.getCourseByUuid(uuid).subscribe((course) => {
      this.course = course;
      this.selectedVideo = this.course?.sections[0]?.videos[0];
      this.selectedVideo = this.selectedVideo ?? this.course?.videos[0];
      this.getVideo();
    });
  }

  public selectVideo(video: Video): void {
    this.selectedVideo = video;
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
}
