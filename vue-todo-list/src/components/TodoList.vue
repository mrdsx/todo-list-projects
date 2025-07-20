<script setup lang="ts">
import type { Todo } from "../App.vue";

const props = defineProps<{ todos: Todo[] }>();
const emit = defineEmits(["updateTodos"]);

function deleteTodo(targetTodo: Todo): void {
  const newTodos = props.todos.filter((todo) => todo !== targetTodo);
  emit("updateTodos", newTodos);
}
</script>

<template>
  <div class="grid gap-2">
    <div
      class="flex w-80 items-center justify-between gap-2 rounded-md bg-white p-2"
      v-for="(todo, index) in todos"
      :key="todo.content + index"
    >
      <span class="text-start break-all">{{ todo.content }}</span>
      <button
        class="max-h-fit self-start bg-red-500 p-1 whitespace-nowrap hover:bg-red-600"
        v-on:click="deleteTodo(todo)"
      >
        Delete Todo
      </button>
    </div>
  </div>
</template>
