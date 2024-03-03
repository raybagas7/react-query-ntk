interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
interface TodosRes {
  todos: Todo[];
}
