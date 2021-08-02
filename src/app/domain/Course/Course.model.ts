import { CourseSection } from '../CourseSection/CourseSection.model';
import { Duration } from '../shared/valueObjects/Duration.vaueObject';
import { UUID } from '../shared/valueObjects/uuid.valueObject';
import { Video } from '../Video/video.model';
import { CourseDescription } from './valueObject/CourseDescription.valueObject';
import { CourseTitle } from './valueObject/CourseTitle.valueObject';

export class Course {
  public readonly uuid: UUID;
  public readonly title: CourseTitle;
  public readonly description: CourseDescription;
  public readonly duration: Duration;
  private _videos: Video[] = [];
  private _sections: CourseSection[] = [];

  constructor(course: CourseObject) {
    this.uuid = new UUID(course.uuid);
    this.title = new CourseTitle(course.title);
    this.description = new CourseDescription(course.description);
    this._videos = course.videos ?? [];
    this._sections = course.sections ?? [];
  }

  get sections() {
    return this._sections;
  }

  get videos() {
    return this._videos;
  }

  public toObject(): CourseObject {
    return {
      uuid: this.uuid.value,
      title: this.title.value,
      description: this.description.value,
      duration: this.duration.value,
      videos: this.videos,
      sections: this.sections,
    };
  }

  public addSections(sections: CourseSection[]): void {
    this._sections = [...this._sections, ...sections];
  }

  public addVideos(videos: Video[]): void {
    const videosToUpdate =
      videos.filter((v) => {
        if (v) return v;
      }) ?? [];

    this._videos = [...this.videos, ...videosToUpdate];
  }

  public removeVideo(uuid: string): void {
    this._videos = [...this.videos.filter((v) => v.uuid.value !== uuid)];
  }
}

export interface CourseObject {
  uuid: string;
  title: string;
  description: string;
  duration?: number;
  videos?: Video[];
  sections?: CourseSection[];
}
