import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LastUrlService } from './application/shared/last-url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private lastUrlService: LastUrlService) {}

  ngOnInit(): void {
    this.lastUrlService.subscribeToRoute();
  }
}
