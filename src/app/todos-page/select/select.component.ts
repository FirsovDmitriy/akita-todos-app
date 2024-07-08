import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FilterValues, initialOptions } from './select.module';
import { TodoService } from '../../state/todo.service';
import { TodoQuery } from '../../state/todo.query';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos-select',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule],
  animations: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosSelectComponent implements OnInit, OnDestroy {
  options = initialOptions
  value = new FormControl<FilterValues>('SHOW_ALL')
  subscription: Subscription  = new Subscription()

  constructor(private todoService:TodoService,
    private query: TodoQuery ) {}

  ngOnInit(): void {
    const valueChangesSubscription = this.value.valueChanges
      .subscribe(value => {
        this.todoService.updateSelect(value as FilterValues)
    })

    const visiabilitySelectSubscription = this.query.visiabilitySelect$
      .subscribe(value => {
        this.value.setValue(value)
      })

    this.subscription.add(valueChangesSubscription)
    this.subscription.add(visiabilitySelectSubscription)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
