import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.authService.user;

    if (!user) {
      this.router.navigateByUrl('auth');
      return false;
    }

    const isAdmin = user.role.isAdminRole();

    if (!isAdmin) {
      this.router.navigateByUrl('public');
      return false;
    }

    return true;
  }
}
