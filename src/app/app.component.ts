import { Component } from '@angular/core';
import { InfoUsersService, User } from './services/info-users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'codetest';
  users: User[] = [];
  constructor(public infoUser: InfoUsersService) {}

  ngOnInit(): void {
    this.users = this.infoUser.getUsers();
  }
}
