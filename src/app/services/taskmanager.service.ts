import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskmanagerService {

  constructor() { }
  saveTasks(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
