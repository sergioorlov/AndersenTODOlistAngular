import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from './todos.service';

@Pipe({
  name: 'todoFilterDate'
})
export class TodoFilterDatePipe implements PipeTransform {

  transform(todo: Todo[], search: string = ''): Todo[] {
    if (!search.trim()) {
      return todo;
    }

    return todo.filter(todos => {
      return todos.date.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
