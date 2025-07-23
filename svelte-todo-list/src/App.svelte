<script lang="ts">
  let todoInput: HTMLInputElement | null = null;

  interface Todo {
    content: string;
  }

  let todos: Todo[] = $state([]);

  function addTodo(e: Event) {
    e.preventDefault();

    if (todoInput!.value.trim().length <= 0) return;

    todos.push({ content: todoInput!.value });

    todoInput!.value = "";
  }

  function deleteTodo(targetTodo: Todo) {
    todos = todos.filter((todo) => todo !== targetTodo);
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
  </div>
</main>
