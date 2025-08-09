"use client";
import { AddTodoForm } from "@/components/AddTodoForm";
import { TodoList } from "@/components/TodoList";
import Image from "next/image";
import { useState } from "react";
import NextJS from "./favicon.ico";

export interface Todo {
  content: string;
}

export default function About() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-gray-500 pt-40">
      <div className="flex gap-4">
        <Image src={NextJS} alt="NextJS icon" width={32} height={32} />
        <h1 className="text-2xl">NextJS Todo List</h1>
      </div>
      <AddTodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
