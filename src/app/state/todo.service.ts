import { Injectable } from "@angular/core";
import { Todo, createTodo } from "./todo.model";
import { TodoStore } from "./todo.store";
import { FilterValues } from "../todos-page/select/select.module";

@Injectable({ providedIn: "root" })
export class TodoService {
  constructor(private todoStore:TodoStore) {}

  add(title:string) {
    const todo = createTodo(title)
    this.todoStore.add(todo)
  }

  complete({ id, completed }: Todo) {
    this.todoStore.update(id, { completed })
  }

  delete(id:string) {
    this.todoStore.remove(id)
  }

  updateSelect(option: FilterValues) {
    this.todoStore.update({ ui: { filter: option } })
  }
}