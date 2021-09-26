import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/application/Auth/auth.service';
import { UserActivationService } from 'src/app/application/User/user-activation.service';
import { User } from 'src/app/domain/User/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit, OnChanges {
  @Input() public users: User[] = [];

  public formArray: FormArray;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userActivation: UserActivationService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.users.length > 0) this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): void {
    const controls = this.users.map((u) => this.fb.control(u.validated));
    this.formArray = this.fb.array(controls);
    this.subscribeControls(controls);
  }

  private subscribeControls(controls: FormControl[]): void {
    controls.forEach((c, index) =>
      c.valueChanges.subscribe((value) =>
        this.updateUserActivation(value, index).then((done) => {
          if (!done)
            this.formArray.at(index).setValue(!value, { emitEvent: false });
        })
      )
    );
  }

  private updateUserActivation(
    isActivated: boolean,
    userIndex: number
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const own = this.authService.user;
      const user = this.users[userIndex];

      if (own.uuid.value === user.uuid.value) return resolve(false);

      this.userActivation
        .toggleActivation(own.uuid.value, user.uuid.value)
        .then((done) => {
          resolve(done);
        })
        .catch((err) => {
          resolve(false);
        });
    });
  }

  public formValidatedControl(index: number): FormControl {
    const control = this.formArray.at(index) as FormControl;

    return control;
  }
}
