import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ChildActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LastUrlService {
  private routerSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {}

  public onDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  public subscribeToRoute() {}

  public navigateToLastUrl(): Promise<boolean> {
    const lastUrl = localStorage.getItem('last');
    if (lastUrl) return this.router.navigateByUrl(lastUrl);

    this.router.navigateByUrl('');
  }
}
