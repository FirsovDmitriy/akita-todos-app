import { guid } from "@datorama/akita";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export function createTodo(title:string): Todo {
  return {
    id: guid(),
    title,
    completed: false
  }
}