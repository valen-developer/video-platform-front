import {
  CourseSection,
  CourseSectionObject,
} from '../CourseSection/CourseSection.model';
import { Duration } from '../shared/valueObjects/Duration.vaueObject';
import { UUID } from '../shared/valueObjects/uuid.valueObject';
import { Video, VideoObject } from '../Video/video.model';
import { CourseDescription } from './valueObject/CourseDescription.valueObject';
import { CourseTitle } from './valueObject/CourseTitle.valueObject';

export class Course {
  public readonly uuid: UUID;
  public readonly title: CourseTitle;
  public readonly description: CourseDescription;
  public readonly duration: Duration;
  public readonly imagePath: string;
  private _videos: Video[] = [];
  private _sections: CourseSection[] = [];

  constructor(course: CourseObject) {
    this.uuid = new UUID(course.uuid);
    this.title = new CourseTitle(course.title);
    this.description = new CourseDescription(course.description);
    this.duration = new Duration(course.duration ?? 0);
    this.imagePath = course.imagePath;

    this._videos = course.videos ?? [];
    this._sections = course.sections ?? [];
    this.sortSections();
    this.sortVideos();
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

  public sortSections(): void {
    this._sections.sort((sc, sp) => {
      const previus = Number(
        sp.title.value
          .replace('.', ' .-')
          .replace('-', ' ')
          .split(' ', 1)
          .join()
          .split('.')
          .join()
          .replace(',', '')
      );

      const actual = Number(
        sc.title.value
          .replace('.', ' .')
          .replace('-', ' ')
          .split(' ', 1)
          .join()
          .split('.')
          .join()
          .replace(',', '')
      );

      return actual - previus;
    });
  }
  public sortVideos(): void {
    this._videos.sort((sc, sp) => {
      const previus = Number(
        sp.title.value
          .replace('_', ' ')
          .replace('.', ' .-')
          .replace('-', ' ')
          .split(' ', 1)
          .join()
          .split('.')
          .join()
          .replace(',', '')
      );

      const actual = Number(
        sc.title.value
          .replace('_', ' ')
          .replace('.', ' .')
          .replace('-', ' ')
          .split(' ', 1)
          .join()
          .split('.')
          .join()
          .replace(',', '')
      );

      return actual - previus;
    });
  }
}

export interface CourseObject {
  uuid: string;
  title: string;
  description: string;
  imagePath?: string;
  duration?: number;
  videos?: Video[];
  sections?: CourseSection[];
}
