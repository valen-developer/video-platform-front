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
import { UserDeleterService } from 'src/app/application/User/user-deleter.service';
import { User } from 'src/app/domain/User/user.model';
import { AlertService } from 'src/app/presentation/shared/modules/alert/alert.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit, OnChanges {
  @Input() public users: User[] = [];
  public formArray: FormArray;
  public user: User;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userActivation: UserActivationService,
    private userDeleter: UserDeleterService,
    private alert: AlertService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.users.length > 0) this.buildForm();
  }

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  private buildForm(): void {
    const controls = this.users.map((u) =>
      this.fb.control({
        value: u.validated,
        disabled: this.isMe(u),
      })
    );
    this.formArray = this.fb.array(controls);
    this.subscribeControls(controls);
  }

  private subscribeControls(controls: FormControl[]): void {
    controls.forEach((c, index) =>
      c.valueChanges.subscribe((value) =>
        this.updateUserActivation(index).then((done) => {
          if (!done) {
            this.formArray.at(index).setValue(!value, { emitEvent: false });
            return this.alert.danger('User can´t be updated');
          }

          if (value) this.alert.succes('user validated');
          if (!value) this.alert.warning('user invalidated');
        })
      )
    );
  }

  private isMe(u: User): boolean {
    return u.uuid.value === this.user.uuid.value;
  }

  private updateUserActivation(userIndex: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const user = this.users[userIndex];

      if (this.isMe(user)) return resolve(false);

      this.userActivation
        .toggleActivation(this.user.uuid.value, user.uuid.value)
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

  public deleteUser(user: User): void {
    const isOwn = this.authService.user.uuid.value === user.uuid.value;
    if (isOwn) return this.alert.warning('same than you!');

    this.userDeleter
      .delete(user.uuid.value)
      .then((ok) => {
        this.users = this.users.filter((u) => u.uuid.value !== user.uuid.value);
        this.alert.succes(`${user.name.value} has been deleted`);
      })
      .catch((err) => {
        this.alert.danger(`${user.name.value} can´t be deleted`);
      });
  }
}
