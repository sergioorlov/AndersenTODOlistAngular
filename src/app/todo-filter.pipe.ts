import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from './todos.service';

@Pipe({
  name: 'todoFilter'
})
export class TodosFilterPipe implements PipeTransform {
  transform(todo: Todo[], search: string = ''): Todo[] {
    if (!search.trim()) {
      return todo;
    }

    return todo.filter(todos => {
      return todos.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
