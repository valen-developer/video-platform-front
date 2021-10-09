import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import * as hammerjs from 'hammerjs';
import { Observable } from 'rxjs';
import { ToggleNavbarstatusService } from '../shared/services/toggle-navbar-status.service';
import { TogglePublicNavbarService } from './services/toogle-navbar-state.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  public isNavbarOpen: Observable<boolean>;

  constructor(private toggleNavbar: ToggleNavbarstatusService) {
    this.isNavbarOpen = this.toggleNavbar.isNavOpen$;
  }

  ngOnInit(): void {}
}
