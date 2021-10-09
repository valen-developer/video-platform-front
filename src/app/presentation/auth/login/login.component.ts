import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get showPassword(): boolean {
    return this.form.value.showPassword;
  }

  private buildForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      showPassword: [false],
    });
  }

  public onSubmit(): void {
    if (this.form.invalid) return this.alert.warning('invalid form');

    const { email, password } = this.form.value;

    this.authService
      .login(email, password)
      .then((response) => {
        if (response) this.router.navigateByUrl('public');
      })
      .catch(({ error }) => {
        this.alert.danger(error?.error ?? 'Server error');
      });
  }
}
