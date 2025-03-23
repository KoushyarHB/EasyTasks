import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // inputs are also properties of the class component and we use property binding to pass them to our components
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // Signal input definition
  avatar = input.required<string>();
  name = input.required<string>();

  // Signal input usage
  // get imagePath(): string {
  //   return 'users/' + this.avatar();
  // }

  // Computed Signal input definition
  imagePath = computed(() => 'users/' + this.avatar());

  onSelectUser() {
    // Signal input can not be set from inside the component
    // this.name.set()
  }
}
