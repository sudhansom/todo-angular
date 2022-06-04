import { Component, OnInit } from '@angular/core';

import { Todo } from './../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: false,
      },
      {
        content: 'second todo',
        completed: true,
      },
    ];
  }
  toogleDone(id: number) {
    this.todos = this.todos.map((value, indx) => {
      if (indx == id) {
        value.completed = !value.completed;
      }
      return value;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((value, indx) => id != indx);
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
