import { Duration } from '../shared/valueObjects/Duration.vaueObject';
import { UUID } from '../shared/valueObjects/uuid.valueObject';
import { Video } from '../Video/video.model';
import { CourseSectionTitle } from './valueObject/CourseSectionTitle.valueObject';

export class CourseSection {
  public readonly uuid: UUID;
  public readonly title: CourseSectionTitle;
  public readonly duration: Duration;
  public videos: Video[] = [];

  constructor(section: CourseSectionObject) {
    this.uuid = new UUID(section.uuid);
    this.title = new CourseSectionTitle(section.title);
    this.videos = section.videos ?? [];
  }

  public toObject(): CourseSectionObject {
    return {
      uuid: this.uuid.value,
      title: this.title.value,
      duration: this.duration.value,
      videos: this.videos,
    };
  }
}

export interface CourseSectionObject {
  uuid: string;
  title: string;
  videos: Video[];
  duration?: number;
}

export interface CourseSectionObjectOnlyVideoUUID {
  uuid: string;
  title: string;
  videos: string[];
  duration: number;
}
