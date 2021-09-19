import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  SimpleChanges,
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
export class SectionsAccordionComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @ViewChildren('accordion') private panels: QueryList<
    ElementRef<HTMLDivElement>
  >;

  @Output() private selectedVideoEmitter = new EventEmitter<{
    video: Video;
    section: CourseSection;
  }>();

  @Input() public courseName: string;
  @Input() public sections: CourseSection[] = [];
  @Input() public videos: Video[] = [];
  @Input() public selectedVideo: Video;
  @Input() public selectedSection: CourseSection;

  private changePanesStatus = true;

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    const oldSection = changes.selectedSection?.previousValue;
    const actualSection = changes.selectedSection?.currentValue;

    const hasChangeSection = oldSection !== actualSection;
    const isFirst = changes.selectedSection?.isFirstChange();

    if (hasChangeSection && !isFirst) this.openPanel();

    this.changePanesStatus = true;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.listenAccordion();
    this.openPanel();
  }

  public onSelectVideo(video: Video, section: CourseSection): void {
    this.changePanesStatus = false;
    this.selectedVideo = video;
    this.selectedVideoEmitter.emit({ video, section });
  }

  public isSelected(uuid: string): boolean {
    return this.selectedVideo?.uuid?.value === uuid;
  }

  private listenAccordion(): void {
    this.panels.forEach((p) => this.addListenerToAccordionButton(p));
  }

  private openPanel(): void {
    if (!this.changePanesStatus) {
      this.changePanesStatus != this.changePanesStatus;
      return;
    }

    const sectionIndex = this.sections.findIndex(
      (s) => s.uuid.value === this.selectedSection.uuid.value
    );

    if (sectionIndex === -1) return;

    const button = this.panels.toArray()[sectionIndex];
    button.nativeElement.click();
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
