import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from 'src/app/application/Auth/sign-up.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public showPassword = false;
  public isLoading = false;

  public signupForm: FormGroup;

  constructor(private fb: FormBuilder, private signupService: SignUpService) {}

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
    if (!isFormValid) return;

    const { email, name, password } = this.signupForm.value;

    this.isLoading = true;
    this.signupService
      .createUser(email, name, password)
      .then(({ ok }) => {
        if (ok) console.log('Todo correcto');
        this.signupForm.reset();
        this.isLoading = false;
      })
      .catch((err) => {
        this.signupForm.reset();

        this.isLoading = false;
      });
  }
}
