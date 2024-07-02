import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TodosSelectComponent } from './select/select.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from '../state/todo.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-todos-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TodosSelectComponent,
    TodoListComponent,
    IconComponent
  ],
  templateUrl: './todos-page.component.html',
  styleUrl: './todos-page.component.css',
})
export class TodosPageComponent {
  valueTodo = new FormControl('')

  constructor(private todoService:TodoService) {}

  add(event:Event) {
    event.preventDefault()

    this.todoService.add(this.valueTodo.value as string)
    this.valueTodo.setValue('')
  }
}
