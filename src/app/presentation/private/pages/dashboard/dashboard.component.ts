import { Component, OnInit } from '@angular/core';
import { ToggleNavbarstatusService } from 'src/app/presentation/shared/services/toggle-navbar-status.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private toggleDashboardNavbar: ToggleNavbarstatusService) {}

  ngOnInit(): void {
    this.toggleDashboardNavbar.isNavOpen$.subscribe(() => {
      console.log('En dashboard');
    });
  }
}
