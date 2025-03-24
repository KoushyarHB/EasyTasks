import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
  users = DUMMY_USERS;

  get imagePath(): string {
    return 'users/' + this.avatar;
  }

  onSelectUser() {
    const userId = this.users.find((user) => user.name === this.name)?.id;
    this.select.emit(userId);
  }
}
