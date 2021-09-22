import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnDestroy,
  Output,
  Renderer2,
} from '@angular/core';
import { fileExtension } from 'src/app/helpers/fileExtension';

@Directive({
  selector: '[dropZone]',
})
export class DropZoneDirective implements OnDestroy {
  private file: File;

  @Output() private fileEmitter = new EventEmitter<File>();

  constructor(private renderer2: Renderer2, private el: ElementRef) {
    console.log('Entras');
  }

  @HostListener('dragover', ['$event']) onDragEnter(event: DragEvent) {
    this._preventDefault(event);
    if (this.file) return;
    this.changeColor('warning');
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent) {
    if (this.file) return;

    this.changeColor('danger');
    this._preventDefault(event);
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    this._preventDefault(event);
    const isValid = this.isValidFile(event.dataTransfer.files);
    if (!isValid) return this.changeColor('danger');

    this.changeColor('succes');
    this.file = event.dataTransfer.files[0];
    this.fileEmitter.emit(this.file);
  }

  private _preventDefault(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private isValidFile(file: FileList): boolean {
    if (file.length > 1) return false;
    if (!file[0]?.name) return false;

    const extension = fileExtension(file[0].name);
    const validExtensions = ['png', 'jpg', 'jpeg'];

    const isValidExtension = validExtensions.includes(extension);

    return isValidExtension;
  }

  private changeColor(color: string): void {
    this.renderer2.setStyle(
      this.el.nativeElement,
      'background-color',
      `var(--${color})`
    );
  }

  ngOnDestroy(): void {
    console.log('Destroy directives');
  }
}
