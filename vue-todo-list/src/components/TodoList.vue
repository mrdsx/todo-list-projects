<script setup lang="ts">
import { ref } from "vue";

interface Todo {
  content: string;
}

const todos = ref<Todo[]>([]);
</script>

<template>
  <div class="grid gap-2">
    <div
      class="flex w-80 items-center justify-between gap-2 rounded-md bg-white p-2"
      v-for="todo in todos"
    >
      <span class="text-start break-all">{{ todo.content }}</span>
      <button
        class="max-h-fit self-start bg-red-500 p-1 whitespace-nowrap hover:bg-red-600"
      >
        Delete Todo
      </button>
    </div>
  </div>
</template>
