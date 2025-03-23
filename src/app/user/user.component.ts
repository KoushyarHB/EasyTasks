import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  // DEFINE
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  avatarPath = computed(() => 'users/' + this.selectedUser().avatar);

  // get avatarPath(): string {
  //   return 'users/' + this.selectedUser.avatar;
  // }

  // USE
  getAvatarPath(): string {
    return 'users/' + this.selectedUser().avatar;
  }

  onSelectUser() {
    console.log(this.selectedUser.name);
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    // SET
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
