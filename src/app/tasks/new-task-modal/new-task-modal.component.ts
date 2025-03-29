import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task-modal',
  imports: [],
  templateUrl: './new-task-modal.component.html',
  styleUrl: './new-task-modal.component.css',
})
export class NewTaskModalComponent {
  @Input({ required: true }) isOpen!: boolean;

  // THE WRONG WAY TO CLOSE THE MODAL:

  // closeModal() {
  //   this.isOpen = false;
  // }

  // WHY IT IS WRONG:

  // In Angular, input properties are one-way bindings from parent to child. So, when the parent changes isNewTaskModalOpen, it updates the child's isOpen. But if I change isOpen inside the child, it doesn't automatically update the parent's variable. It's not two-way binding unless I set it up that way.

  // modifying an input property in the child is an anti-pattern. It leads to unpredictable behavior because the parent and child can end up out of sync.

  // THE RIGHT WAY TO CLOSE THE MODAL:

  @Output() close = new EventEmitter();

  closeModal() {
    this.close.emit();
  }
}
