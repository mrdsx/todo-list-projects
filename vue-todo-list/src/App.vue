<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import TodoList from "./components/TodoList.vue";

export interface Todo {
  content: string;
}

const todos = ref<Todo[]>([]);

const todoInputRef = useTemplateRef("todo-input-ref");

function handleSubmit(e: Event): void {
  e.preventDefault();

  const todoInputVal = (todoInputRef.value as HTMLInputElement).value;
  if (todoInputVal.trim().length <= 0) return;
  addTodo(todoInputVal);

  (todoInputRef.value as HTMLInputElement).value = "";
}

function addTodo(content: string): void {
  const newTodo = { content };
  todos.value.push(newTodo);
}
</script>

<template>
  <div class="flex h-screen flex-col items-center bg-gray-500 text-center">
    <div class="h-full pt-[30vh]">
      <h1 class="text-2xl">Vue Todo List</h1>
      <form class="my-4 flex justify-center gap-4" v-on:submit="handleSubmit">
        <input class="bg-white p-1" type="text" ref="todo-input-ref" />
        <button class="bg-indigo-400 px-2 hover:bg-indigo-500">Add Todo</button>
      </form>
      <TodoList :todos="todos" @update-todos="todos = $event" />
    </div>
  </div>
</template>
