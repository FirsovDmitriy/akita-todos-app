import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Todo } from "./todo.model";
import { FILTER_VALUES, FilterValues } from "../todos-page/select/select.module";

export interface TodosState extends EntityState<Todo, string> {
  ui: {
    filter: FilterValues
  }
}

const initialState: TodosState = {
  ui: {
    filter: FILTER_VALUES.SHOW_ALL
  }
}

@Injectable({
  providedIn: "root"
})
@StoreConfig({ name: 'todos' })
export class TodoStore extends EntityStore<TodosState> {
  constructor() {
    super(initialState)
  }
}
