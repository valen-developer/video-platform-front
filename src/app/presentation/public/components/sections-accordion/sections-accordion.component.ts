import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CourseSection } from 'src/app/domain/CourseSection/CourseSection.model';
import { Video } from 'src/app/domain/Video/video.model';

@Component({
  selector: 'app-sections-accordion',
  templateUrl: './sections-accordion.component.html',
  styleUrls: ['./sections-accordion.component.scss'],
})
export class SectionsAccordionComponent implements OnInit, AfterViewInit {
  @ViewChildren('accordion') private panels: QueryList<
    ElementRef<HTMLDivElement>
  >;

  @Output() private selectedVideoEmitter = new EventEmitter<Video>();

  @Input() public sections: CourseSection[] = [];
  @Input() public videos: Video[] = [];
  @Input() public selectedVideo: Video;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.sections);
    console.log(this.videos);
  }

  ngAfterViewInit(): void {
    this.listenAccordion();
  }

  public onSelectVideo(video: Video): void {
    this.selectedVideo = video;
    this.selectedVideoEmitter.emit(video);
  }

  public isSelected(uuid: string): boolean {
    return this.selectedVideo?.uuid?.value === uuid;
  }

  private listenAccordion(): void {
    this.panels.forEach((p) => this.addListenerToAccordionButton(p));
  }

  private addListenerToAccordionButton(el: ElementRef) {
    let isActive = false;

    this.renderer.listen(el.nativeElement, 'click', () => {
      if (isActive) this.renderer.removeClass(el.nativeElement, 'active');
      if (!isActive) this.renderer.addClass(el.nativeElement, 'active');
      isActive = !isActive;

      const panel: HTMLDivElement = this.renderer.nextSibling(el.nativeElement);

      this.renderer.setStyle(
        panel,
        'max-height',
        isActive ? panel.scrollHeight + 'px' : null
      );
    });
  }
}
