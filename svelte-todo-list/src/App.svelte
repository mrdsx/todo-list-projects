<script lang="ts" module>
  import Todos from "./lib/Todos.svelte";

  let todoInput: HTMLInputElement | null = null;

  export interface Todo {
    content: string;
  }

  let todos = $state<Todo[]>([]);

  function addTodo(e: Event): void {
    e.preventDefault();

    if (todoInput!.value.trim().length <= 0) return;

    todos.push({ content: todoInput!.value });

    todoInput!.value = "";
  }
</script>

<main class="flex h-screen justify-center bg-gray-500">
  <div class="flex flex-col gap-4 text-center">
    <h1 class="mt-40 text-3xl">Svelte Todo List</h1>
    <form>
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
    <Todos {todos} />
  </div>
</main>
