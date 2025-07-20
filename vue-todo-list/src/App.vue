<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
</script>

<template>
  <div class="flex h-screen flex-col items-center bg-gray-500 text-center">
    <div class="h-full pt-[30vh]">
      <h1 class="text-2xl">Vue Todo List</h1>
      <form class="my-4 flex justify-center gap-4">
        <input class="bg-white p-1" type="text" />
        <button
          class="bg-orange-400 px-2 hover:bg-orange-500"
          v-on:click="(e) => e.preventDefault()"
        >
          Add Todo
        </button>
      </form>
      <TodoList />
    </div>
  </div>
</template>
