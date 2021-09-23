import { Component, OnInit } from '@angular/core';
import { UserGetterService } from 'src/app/application/User/user-getter.service';
import { User } from 'src/app/domain/User/user.model';

@Component({
  templateUrl: './users-board.component.html',
  styleUrls: ['./users-board.component.scss'],
})
export class UsersBoardComponent implements OnInit {
  public users: User[] = [];

  constructor(private userGetter: UserGetterService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  private async getAllUsers(): Promise<void> {
    this.userGetter.getAll().then((users) => {
      this.users = users;

      console.log(this.users);
    });
  }
}
