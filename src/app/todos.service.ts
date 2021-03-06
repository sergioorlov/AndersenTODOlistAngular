import { Injectable } from '@angular/core';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public todos: ITodo[] = this.loadLS();

  saveLS(): void {
    const str: string = JSON.stringify(this.todos);
    localStorage.setItem('todos', str);
  }
  loadLS(): Array<ITodo> {
    const str: string = localStorage.getItem('todos') || '[]';
    const test: Array<ITodo> = [
      {
        completed: false,
        date: '2019-09-13',
        id: 1565345832403,
        title: 'Create some TODO!'
      },
      {
        completed: false,
        date: '2018-12-22',
        id: 1565345842940,
        title: 'Add test obj'
      },
      {
        completed: false,
        date: '2019-11-13',
        id: 1565345850687,
        title: 'Default list'
      },
      {
        completed: false,
        date: '1990-11-11',
        id: 1565345858395,
        title: 'Some project TEST'
      }
    ];

    const someTestObj: string = JSON.stringify(test);
    const data: Array<ITodo> = JSON.parse(str) || [];
    const someObj: Array<ITodo> = JSON.parse(someTestObj);

    const result: Array<ITodo> = !localStorage.getItem('todos') ? someObj :  data;
    return result;
  }

  onToggle(id: number) {
    const tog = this.todos.findIndex(i => i.id === id);
    this.todos[tog].completed = !this.todos[tog].completed;
  }

  delTodos(id: number) {
    this.todos = this.todos.filter(i => i.id !== id);
    this.saveLS();
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
    this.saveLS();
  }

  sortTitleAsc() {
    const item: Array<ITodo> = this.todos;
    const titleAsc: Array<ITodo> = Array.from(item);
    titleAsc.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    this.todos = titleAsc;
  }

  sortTitleDesc() {
    const item: Array<ITodo> = this.todos;
    const titleDesc: Array<ITodo> = Array.from(item);
    const sortedDesc = titleDesc.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    sortedDesc.reverse();
    this.todos = sortedDesc;
  }

  sortDateAsc() {
    const item: Array<ITodo> = this.todos;
    const dateAsc: Array<ITodo> = Array.from(item);
    dateAsc.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    });
    this.todos = dateAsc;
  }
  sortDateDesc() {
    const item: Array<ITodo> = this.todos;
    const dateDesc: Array<ITodo> = Array.from(item);
    const sortedDesc = dateDesc.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    });
    sortedDesc.reverse();
    this.todos = sortedDesc;
  }

  discharging() {
    const item: Array<ITodo> = this.todos;
    const discharge: Array<ITodo> = Array.from(item);
    discharge.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    this.todos = discharge;
  }
}
