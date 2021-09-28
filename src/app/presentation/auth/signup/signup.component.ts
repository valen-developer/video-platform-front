import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from 'src/app/application/Auth/sign-up.service';
import { AlertService } from '../../shared/modules/alert/alert.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public showPassword = false;
  public isLoading = false;

  public signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signupService: SignUpService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.min(8)]],
    });
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  public onSubmit() {
    const isFormValid = this.signupForm.valid;
    if (!isFormValid) return this.alertService.warning('Invalid form');

    const { email, name, password } = this.signupForm.value;

    this.isLoading = true;
    this.signupService
      .createUser(email, name, password)
      .then(({ ok }) => {
        this.alertService.succes('succes! Admin must validate you');
        this.signupForm.reset();
        this.isLoading = false;
      })
      .catch((err) => {
        this.isLoading = false;
        this.alertService.danger(err.error.error);
      });
  }
}
