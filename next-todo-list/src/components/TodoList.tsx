"use client";
import { Todo } from "@/app/page";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function TodoList({ todos, setTodos }: TodoListProps) {
  function deleteTodo(todo: Todo) {
    const newTodos = todos.filter((t) => t !== todo);
    setTodos([...newTodos]);
  }

  return (
    <div className="flex h-80 w-80 flex-col gap-2 overflow-y-auto">
      {todos.map((todo, index) => (
        <div
          className="flex w-full items-center justify-between rounded-md bg-white p-2"
          key={todo.content + index}
        >
          <span>{todo.content}</span>
          <button
            className="bg-red-500 hover:bg-red-600"
            onClick={() => deleteTodo(todo)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
