import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralLoadingComponent } from './components/general-loading/general-loading.component';
import { DropZoneDirective } from './directives/drop-zone.directive';

@NgModule({
  declarations: [GeneralLoadingComponent, DropZoneDirective],
  imports: [CommonModule],
  exports: [GeneralLoadingComponent, DropZoneDirective],
})
export class SharedModule {}
