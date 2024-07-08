import { Query, QueryEntity } from "@datorama/akita";
import { TodosState, TodoStore } from "./todo.store";
import { Injectable } from "@angular/core";
import { combineLatestWith, combineLatest } from "rxjs";
import { FILTER_VALUES, FilterValues } from "../todos-page/select/select.module";
import { Todo } from "./todo.model";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoQuery extends QueryEntity<TodosState> {

  visiabilitySelect$ = this.select(state => state.ui.filter)

  selectVisibleTodos$ = this.visiabilitySelect$.pipe(
    combineLatestWith(this.selectAll()),
    map(([filter, todos]) => this.getVisibleTodos(filter, todos))
  )

  constructor(protected override store: TodoStore) {
    super(store)
  }

  private getVisibleTodos(filter: FilterValues, todos: Todo[]): Todo[] {
    switch (filter) {
      case FILTER_VALUES.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case FILTER_VALUES.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
}
