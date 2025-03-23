import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // inputs are also properties of the class component and we use property binding to pass them to our components
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath(): string {
    return 'users/' + this.avatar;
  }

  onSelectUser() {}
}
