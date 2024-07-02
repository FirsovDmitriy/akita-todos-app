import { Component, OnInit } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { Todo } from '../../state/todo.model';
import { TodoService } from '../../state/todo.service';
import { TodoQuery } from '../../state/todo.query';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent, AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []

  constructor(private todoService:TodoService,
    private query: TodoQuery) {}

  complete(todo:Todo) {
    this.todoService.complete(todo)
  }

  delete(id:string) {
    this.todoService.delete(id)
  }

  ngOnInit(): void {
    this.query.selectVisibleTodos$
      .subscribe(todos => {
        this.todos = [...todos]
      })
  }
}
