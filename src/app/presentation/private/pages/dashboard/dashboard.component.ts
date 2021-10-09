import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToggleNavbarstatusService } from 'src/app/presentation/shared/services/toggle-navbar-status.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public isOpenSidebar: Observable<boolean>;

  constructor(private toggleDashboardNavbar: ToggleNavbarstatusService) {
    this.isOpenSidebar = this.toggleDashboardNavbar.isNavOpen$;
  }

  ngOnInit(): void {}
}
