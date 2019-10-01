import {Component} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  constructor(private todosService: TodosService) { }

  private searchTitle = '';
  private searchDate = '';

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  delTodo(id: number) {
    this.todosService.delTodos(id);
  }

  sortByTitleAsc() {
    this.todosService.sortTitleAsc();
  }

  sortByTitleDesc() {
    this.todosService.sortTitleDesc();
  }

  sortByDateAsc() {
    this.todosService.sortDateAsc();
  }

  sortByDateDesc() {
    this.todosService.sortDateDesc();
  }

  btnDischarging() {
    this.todosService.discharging();
  }
}
