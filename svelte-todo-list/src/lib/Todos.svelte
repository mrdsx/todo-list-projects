<script lang="ts">
  import type { Todo } from "../App.svelte";

  interface Props {
    todos: Todo[];
  }

  let { todos }: Props = $props();

  function deleteTodo(targetTodo: Todo): void {
    todos = todos.filter((todo) => todo !== targetTodo);
  }
</script>

<div class="grid gap-2">
  {#each todos as todo}
    <div
      class="flex w-80 items-center justify-between gap-2 rounded-lg bg-white p-2"
    >
      <div class="text-start break-all">{todo.content}</div>
      <button
        class="self-start bg-red-500 whitespace-nowrap hover:bg-red-600"
        onclick={() => deleteTodo(todo)}
      >
        Delete
      </button>
    </div>
  {/each}
</div>
