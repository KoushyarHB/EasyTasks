import { Component, Input, SimpleChanges } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { ITask } from './task/task.model';
import { NewTaskModalComponent } from './new-task-modal/new-task-modal.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskModalComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name: string | undefined;
  @Input() id: string | undefined;
  isNewTaskModalOpen = false;

  // tasks: ITask[] = [];

  // ngOnInit() {
  //   this.updateTasks();
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['id']) {
  //     this.updateTasks();
  //   }
  // }

  // private updateTasks() {
  //   this.tasks = dummyTasks.filter((task) => task.userId === this.id);
  // }

  tasks: ITask[] = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  openNewTaskModal() {
    this.isNewTaskModalOpen = true;
  }

  onCloseNewTaskModal() {
    this.isNewTaskModalOpen = false;
  }
}
