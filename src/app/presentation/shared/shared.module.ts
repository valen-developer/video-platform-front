import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralLoadingComponent } from './components/general-loading/general-loading.component';

@NgModule({
  declarations: [GeneralLoadingComponent],
  imports: [CommonModule],
  exports: [GeneralLoadingComponent],
})
export class SharedModule {}
