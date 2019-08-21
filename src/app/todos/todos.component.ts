import {Component, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  private searchTitle: string = '';
  private searchDate: string = '';

  ngOnInit() {
  }

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
