import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { SafeUrl } from '@angular/platform-browser';
import { Course } from 'src/app/domain/Course/Course.model';
import { blobToUrl } from 'src/app/helpers/blobToDataurl';

@Component({
  selector: 'app-course-editor-image',
  templateUrl: './course-editor-image.component.html',
  styleUrls: ['./course-editor-image.component.scss'],
})
export class CourseEditorImageComponent implements OnInit, AfterViewInit {
  @ViewChild('file') private inputFile: ElementRef<HTMLInputElement>;

  @Input() public course: Course;
  @Input() public image: SafeUrl | string;

  @Output() public selectImageEmitter = new EventEmitter<File | Blob>();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  public onInput(event: any) {
    const file = event.target.files[0];
    this.onEnterFile(file);
  }

  public async onEnterFile(file: File): Promise<void> {
    this.selectImageEmitter.emit(file);
  }
}
