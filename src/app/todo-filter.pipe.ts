import {Pipe, PipeTransform} from '@angular/core';
import {ITodo} from './todos.service';

@Pipe({
  name: 'todoFilter'
})
export class TodosFilterPipe implements PipeTransform {
  transform(todo: ITodo[], search: string = ''): ITodo[] {
    if (!search.trim()) {
      return todo;
    }

    return todo.filter(todos => {
      return todos.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
