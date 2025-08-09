"use client";
import { Todo } from "@/app/page";
import { useRef } from "react";

interface AddTodoFormProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function AddTodoForm({ todos, setTodos }: AddTodoFormProps) {
  const todoInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (todoInputRef.current?.value.trim().length === 0) return;

    if (todoInputRef.current === null) return;
    const newTodo = { content: todoInputRef.current.value };
    setTodos([...todos, newTodo]);
    todoInputRef.current.value = "";
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input className="bg-white" type="text" ref={todoInputRef} />
      <button className="bg-black text-white hover:bg-neutral-900">
        Add Todo
      </button>
    </form>
  );
}
