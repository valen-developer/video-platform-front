import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import * as hammerjs from 'hammerjs';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit, AfterViewInit {
  @ViewChild('public') public publicDivElement: ElementRef<HTMLDivElement>;

  public isOpenNavbar = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.manageGesture();
  }

  private manageGesture() {
    const mg = new hammerjs.Manager(this.publicDivElement.nativeElement, {
      recognizers: [[Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]],
    });

    mg.on('swiperight', () => this.openNavbar());
    mg.on('swipeleft', () => this.hideNavbar());
  }

  private openNavbar(): void {
    console.log('open');
    this.isOpenNavbar = true;
  }
  private hideNavbar(): void {
    this.isOpenNavbar = false;
  }
}
