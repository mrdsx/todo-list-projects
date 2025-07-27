import { useRef } from "react";
import { addTodo, incrementLastTodoId, store } from "../store/store";

export function AddTodoForm() {
  const todoInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    store.dispatch(incrementLastTodoId());
    const { lastTodoId } = store.getState();

    const todoInputValue = todoInputRef.current!.value;
    if (todoInputValue!.trim().length === 0) return;

    const newTodo = { id: lastTodoId, content: todoInputValue };
    store.dispatch(addTodo(newTodo));
    todoInputRef.current!.value = "";
  }

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <input
        className="bg-white rounded-md px-2 py-2"
        type="text"
        ref={todoInputRef}
      />
      <input
        className="bg-blue-500 rounded-md px-2 cursor-pointer hover:bg-blue-600"
        type="submit"
        value="Add Todo"
      />
    </form>
  );
}
