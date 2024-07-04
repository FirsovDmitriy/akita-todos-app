import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TodosSelectComponent } from './select/select.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from '../state/todo.service';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
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
    IconComponent,
  ],
  templateUrl: './todos-page.component.html',
  styleUrl: './todos-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosPageComponent {
  formState = new FormGroup({
    valueTodo: new FormControl(''),
  })

  constructor(private todoService:TodoService) {}

  add() {
    this.todoService.add(this.formState.value.valueTodo ?? '')
    this.formState.reset()
  }
}
