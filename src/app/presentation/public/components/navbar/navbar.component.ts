import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/application/Auth/auth.service';
import { User } from 'src/app/domain/User/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('profileOptions')
  private profileOptionsElement: ElementRef<HTMLDivElement>;

  public user: User | null = null;
  public isLogin = false;
  public isUserOptionOpen = false;

  // Subscriptions
  private userSubscription: Subscription;
  private isLoginSubscription: Subscription;

  constructor(private authService: AuthService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.isLoginSubscription = this.authService.isLogin$.subscribe(
      (isLogin) => (this.isLogin = isLogin)
    );
    this.userSubscription = this.authService.user$.subscribe(
      (user) => (this.user = user)
    );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.isLoginSubscription.unsubscribe();
  }

  public logout(): void {
    this.authService.logout();
  }
}
