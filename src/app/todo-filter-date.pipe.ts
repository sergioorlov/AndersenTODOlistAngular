import { Pipe, PipeTransform } from '@angular/core';
import {ITodo} from './todos.service';

@Pipe({
  name: 'todoFilterDate'
})
export class TodoFilterDatePipe implements PipeTransform {

  transform(todo: ITodo[], search: string = ''): ITodo[] {
    if (!search.trim()) {
      return todo;
    }

    return todo.filter(todos => {
      return todos.date.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
