import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/application/Auth/auth.service';
import { User } from 'src/app/domain/User/user.model';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss'],
})
export class DashboardSidebarComponent implements OnInit, OnDestroy {
  public baseUrl = '/admin/dashboard';

  public user: User;
  public userSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSubscriber();
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  private userSubscriber(): void {
    this.userSubscription = this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  public logout(): void {
    this.authService.logout();
  }
}
