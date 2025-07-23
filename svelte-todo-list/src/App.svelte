<script lang="ts" module>
  import AddTodoForm from "./lib/AddTodoForm.svelte";
  import Todos from "./lib/Todos.svelte";

  export interface Todo {
    content: string;
  }

  let todos = $state<Todo[]>([]);
</script>

<main class="flex h-screen justify-center bg-gray-500">
  <div class="flex flex-col gap-4 text-center">
    <h1 class="mt-40 text-3xl">Svelte Todo List</h1>
    <AddTodoForm {todos} />
    <Todos {todos} />
  </div>
</main>
