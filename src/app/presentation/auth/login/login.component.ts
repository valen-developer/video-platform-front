import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/application/Auth/auth.service';
import { LastUrlService } from 'src/app/application/shared/last-url.service';
import { AlertService } from '../../shared/modules/alert/alert.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {},
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  public rememberControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private authService: AuthService
  ) {
    this.rememberControl = this.fb.control(false);
  }

  ngOnInit(): void {
    this.buildForm();
    this.getRemember();
  }

  get showPassword(): boolean {
    return this.form.value.showPassword;
  }

  private buildForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: this.rememberControl,
      showPassword: [false],
    });
  }

  private setRemember(email: string): void {
    const isRemember = this.form.get('remember').value;

    if (isRemember) {
      localStorage.setItem('email', email);
      return;
    }

    localStorage.removeItem('email');
  }

  private getRemember(): void {
    const email = localStorage.getItem('email');
    if (email) {
      this.form.get('email').setValue(email);
      this.form.get('remember').setValue(true);
    }
  }

  public onSubmit(): void {
    if (this.form.invalid) return this.alert.warning('invalid form');

    const { email, password } = this.form.value;

    this.setRemember(email);

    this.authService
      .login(email, password)
      .then((response) => {
        if (response) this.router.navigateByUrl('');
      })
      .catch(({ error }) => {
        this.alert.danger(error?.error ?? 'Server error');
      });
  }
}
