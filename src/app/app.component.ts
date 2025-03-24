import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '1-first-test';
  users = DUMMY_USERS;
  selectedUserId: any;

  catchSelectedUserId(selectedUserId: string) {
    this.selectedUserId = selectedUserId;
  }
}
