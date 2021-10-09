import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralLoadingComponent } from './components/general-loading/general-loading.component';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { OpenNavbarSwipperDirective } from './directives/open-navbar-swipper.directive';

@NgModule({
  declarations: [
    GeneralLoadingComponent,
    DropZoneDirective,
    OpenNavbarSwipperDirective,
  ],
  imports: [CommonModule],
  exports: [
    GeneralLoadingComponent,
    DropZoneDirective,
    OpenNavbarSwipperDirective,
  ],
})
export class SharedModule {}
