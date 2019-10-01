import { Component } from '@angular/core';
import {ITodo, TodosService} from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title = '';
  date = '';
  constructor(private todosService: TodosService) { }

  addTodo() {
    const todo: ITodo = {
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
