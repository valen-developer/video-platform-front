import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from '../shared/modules/alert/alert.module';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, PrivateRoutingModule, AlertModule],
})
export class PrivateModule {
  constructor() {
    console.log('carga private module');
  }
}
