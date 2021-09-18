import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/application/Auth/auth.service';

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
    const { email, password } = this.form.value;

    this.authService.login(email, password).then((response) => {
      if (response) this.router.navigateByUrl('');
    });
  }
}
