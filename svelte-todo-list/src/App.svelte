<script lang="ts">
  interface Note {
    content: string;
  }

  const notes: Note[] = [{ content: "Note 2" }, { content: "Note 2" }];
</script>

<main class="flex h-screen justify-center bg-gray-500">
  <div class="flex flex-col gap-4 text-center">
    <h1 class="mt-40 text-3xl">Svelte Todo List</h1>
    <div>
      <input
        class="bg-white p-1 text-black"
        id="todo-input"
        type="text"
        placeholder="Enter your todo text"
      />
      <button class="bg-orange-400 hover:bg-orange-500">Add Todo</button>
    </div>
    <div class="grid gap-2">
      {#each notes as note}
        <div
          class="flex w-80 items-center justify-between gap-2 rounded-lg bg-white p-2"
        >
          <div class="text-start break-all">{note.content}</div>
          <button
            class="self-start bg-red-500 whitespace-nowrap hover:bg-red-600"
          >
            Delete Todo
          </button>
        </div>
      {/each}
    </div>
  </div>
</main>
