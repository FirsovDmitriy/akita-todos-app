import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FilterValues, initialOptions } from './select.module';
import { TodoService } from '../../state/todo.service';
import { TodoQuery } from '../../state/todo.query';

@Component({
  selector: 'app-todos-select',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule],
  animations: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosSelectComponent implements OnInit {
  options = initialOptions
  value = new FormControl<FilterValues>('SHOW_ALL')

  constructor(private todoService:TodoService,
    private query: TodoQuery ) {}

  ngOnInit(): void {
    this.value.valueChanges
      .subscribe(value => {
        this.todoService.updateFilter(value as FilterValues)
    })

    this.query.visiabilityFilter$
      .subscribe(val => {
        this.value.setValue(val)
      })
  }
}
