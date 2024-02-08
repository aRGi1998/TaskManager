import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.model';
import { TaskmanagerService } from '../services/taskmanager.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  tasks: Task[] = [];
  taskForm!: FormGroup;
  isChecked: boolean = false;

  constructor(private formBuilder: FormBuilder, private taskmanagerService: TaskmanagerService) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      isChecked: [false]
    });
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: this.taskForm.value.name,
      description: this.taskForm.value.description,
      completed: this.taskForm.value.isChecked
    };
    this.tasks.push(newTask);
    this.saveTasks();
    this.taskForm.reset();
  }

  private saveTasks() {
    this.taskmanagerService.saveTasks(this.tasks);
  }

}
