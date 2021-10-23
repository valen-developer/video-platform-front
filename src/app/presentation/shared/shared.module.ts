import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { GeneralLoadingComponent } from './components/general-loading/general-loading.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

// Directives
import { OpenNavbarSwipperDirective } from './directives/open-navbar-swipper.directive';
import { DropZoneDirective } from './directives/drop-zone.directive';

@NgModule({
  declarations: [
    GeneralLoadingComponent,
    DropZoneDirective,
    OpenNavbarSwipperDirective,
    CheckboxComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    GeneralLoadingComponent,
    CheckboxComponent,
    DropZoneDirective,
    OpenNavbarSwipperDirective,
  ],
})
export class SharedModule {}
