import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskmanagerService } from '../services/taskmanager.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss']
})
export class ViewtaskComponent {
  tasks: Task[] = [];
  constructor(private taskmanagerService: TaskmanagerService) {}

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  onDelete(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    this.taskmanagerService.saveTasks(this.tasks);
  }
}
