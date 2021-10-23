import { AfterViewInit, Directive, ElementRef } from '@angular/core';

import * as hammerjs from 'hammerjs';

import { ToggleNavbarstatusService } from '../services/toggle-navbar-status.service';

@Directive({
  selector: '[appOpenNavbarSwipper]',
})
export class OpenNavbarSwipperDirective implements AfterViewInit {
  private mobileScreenSize = 500;
  private tabletScreenSize = 1000;

  constructor(
    private el: ElementRef,
    private toogleNavbar: ToggleNavbarstatusService
  ) {}

  ngAfterViewInit(): void {
    const screenWidth = window.innerWidth;
    const isTablet = screenWidth <= this.tabletScreenSize;

    if (isTablet) {
      const mg = new hammerjs.Manager(this.el.nativeElement, {
        recognizers: [
          [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }],
          [Hammer.Tap, { taps: 1 }],
        ],
      });

      mg.on('swiperight', () => this.openNavbar());
      mg.on('swipeleft', () => this.hideNavbar());
      mg.on('tap', () => this.hideNavbar());
    }
  }

  private openNavbar(): void {
    this.toogleNavbar.openNavbar();
  }
  private hideNavbar(): void {
    this.toogleNavbar.hideNavbar();
  }
}
