import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinemaModeService {
  private isCinemaMode = false;

  private isCinemaModeSubject: BehaviorSubject<boolean>;
  public isCinemaMode$: Observable<boolean>;

  constructor() {
    this.isCinemaModeSubject = new BehaviorSubject(this.isCinemaMode);
    this.isCinemaMode$ = this.isCinemaModeSubject.asObservable();

    this.getCinemaModeStatus();
  }

  public toggleCinemaMode(): void {
    this.isCinemaMode = !this.isCinemaMode;
    this.saveCinemaModeStatus();
    this.emit();
  }

  private getCinemaModeStatus(): void {
    const isCinemaMode = localStorage.getItem('cinemaMode');

    if (!isCinemaMode) return;

    if (isCinemaMode === 'true') this.isCinemaMode = true;
    if (isCinemaMode === 'false') this.isCinemaMode = false;

    this.emit();
  }

  private saveCinemaModeStatus(): void {
    localStorage.setItem('cinemaMode', `${this.isCinemaMode}`);
  }

  private emit(): void {
    console.log(this.isCinemaMode);

    this.isCinemaModeSubject.next(this.isCinemaMode);
  }
}
