import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class ToggleNavbarstatusService {
  public isNavbarOpen = false;

  private toogleSubject: BehaviorSubject<boolean>;
  public isNavOpen$: Observable<boolean>;

  constructor() {
    this.toogleSubject = new BehaviorSubject(this.isNavbarOpen);
    this.isNavOpen$ = this.toogleSubject.asObservable();
  }

  public openNavbar(): void {
    this.isNavbarOpen = true;
    this.emit();
  }
  public hideNavbar(): void {
    this.isNavbarOpen = false;
    this.emit();
  }

  private emit(): void {
    console.log('Emit navbar status');

    this.toogleSubject.next(this.isNavbarOpen);
  }
}
