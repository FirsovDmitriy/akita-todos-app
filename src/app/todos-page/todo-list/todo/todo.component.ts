import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Todo } from '../../../state/todo.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxModule, ButtonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit, OnChanges {
  @Input() todo:Todo | undefined
  @Output() complete = new EventEmitter();
  @Output() delete = new EventEmitter();

  checked = new FormControl(false);

  ngOnChanges(): void {
    if(this.todo != undefined) {
      this.checked.setValue(this.todo.completed)
    }
  }

  ngOnInit(): void {
    this.checked.valueChanges.subscribe(value => {
      this.complete.emit({
        ...this.todo,
        completed: value,
      });
    });
  }
}
