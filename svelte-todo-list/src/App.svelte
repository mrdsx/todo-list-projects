<script lang="ts" module>
  import AddTodoForm from "./lib/AddTodoForm.svelte";
  import Todos from "./lib/Todos.svelte";
  import svelteIcon from "./assets/svelte.svg";

  export interface Todo {
    content: string;
  }

  let todos = $state<Todo[]>([]);
</script>

<main class="flex h-screen justify-center bg-gray-500">
  <div class="flex flex-col gap-4 text-center">
    <div class="mt-40 flex justify-evenly">
      <img src={svelteIcon} alt="" />
      <h1 class="text-3xl">Svelte Todo List</h1>
    </div>
    <AddTodoForm {todos} />
    <Todos {todos} />
  </div>
</main>
