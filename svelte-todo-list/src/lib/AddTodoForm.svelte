<script lang="ts">
  import type { Todo } from "../App.svelte";

  interface Props {
    todos: Todo[];
  }

  const { todos }: Props = $props();

  let todoInput: HTMLInputElement | null = null;

  function addTodo(e: Event): void {
    e.preventDefault();

    if (todoInput!.value.trim().length <= 0) return;

    todos.push({ content: todoInput!.value });

    todoInput!.value = "";
  }
</script>

<form class="flex gap-2">
  <input
    class="bg-white p-1 text-black"
    id="todo-input"
    type="text"
    placeholder="Enter your todo text"
    bind:this={todoInput}
  />
  <button
    class="bg-orange-400 hover:bg-orange-500"
    type="submit"
    onclick={addTodo}
  >
    Add Todo
  </button>
</form>
