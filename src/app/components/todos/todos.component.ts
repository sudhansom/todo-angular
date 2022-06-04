import { Component, OnInit } from '@angular/core';

import { Todo } from './../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {
      content: 'first todo',
      completed: false,
    },
    {
      content: 'second todo',
      completed: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
