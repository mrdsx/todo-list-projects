import { useSelector } from "react-redux";
import type { Todo } from "../app/App";
import { deleteTodo, store, type RootState } from "../store/store";

export function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);

  function handleClick(targetTodo: Todo): void {
    store.dispatch(deleteTodo(targetTodo));
  }

  return (
    <div className="mt-4 grid gap-4 overflow-auto max-h-80">
      {todos &&
        todos.map((todo: Todo) => (
          <div
            className="flex bg-white rounded-lg p-2 w-80 break-all"
            key={todo.id}
          >
            <div>{todo.content}</div>
            <input
              className="ml-auto p-2 max-h-fit rounded-lg bg-red-500 hover:bg-red-600 cursor-pointer"
              type="button"
              value="Delete"
              onClick={() => handleClick(todo)}
            />
          </div>
        ))}
    </div>
  );
}
