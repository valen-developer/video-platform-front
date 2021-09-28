import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { IUuidGenerator } from 'src/app/domain/shared/interfaces/UUIDGenerator.interface';

import { Alert, alertTypes } from './alert.model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject: Subject<Alert>;
  public onAlert$: Observable<Alert>;

  constructor(private uuidGenerator: IUuidGenerator) {
    this.alertSubject = new Subject();
    this.onAlert$ = this.alertSubject.asObservable();
  }

  public succes(message: string): void {
    this.emitAlert(message, 'succes');
  }

  public warning(message: string): void {
    this.emitAlert(message, 'warning');
  }

  public danger(message: string): void {
    this.emitAlert(message, 'danger');
  }

  private emitAlert(message: string, type: alertTypes, autoClose = true): void {
    this.alertSubject.next({
      uuid: this.uuidGenerator.generate(),
      message,
      type,
      autoClose,
    });
  }
}
