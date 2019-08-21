import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  title = '';
  date = '';
  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: this.date
    };
    this.todosService.addTodo(todo);
    this.title = '';
    this.date = '';
  }
}
