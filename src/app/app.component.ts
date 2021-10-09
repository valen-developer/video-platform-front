import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './application/Auth/auth.service';
import { LastUrlService } from './application/shared/last-url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private lastUrlService: LastUrlService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lastUrlService.subscribeToRoute();
    this.authService.loginToken();
    // this.lastUrlService.navigateToLastUrl();
  }
}
