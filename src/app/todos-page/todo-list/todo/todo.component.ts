import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Todo } from '../../../state/todo.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxModule, ButtonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() todo!: Todo;
  @Output() complete = new EventEmitter();
  @Output() delete = new EventEmitter();

  checked = new FormControl();
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    if (this.todo != undefined) {
      this.checked.setValue(this.todo.completed);
    }

    const check = this.checked.valueChanges.subscribe((completed) => {
      this.complete.emit({
        id: this.todo.id,
        completed
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
