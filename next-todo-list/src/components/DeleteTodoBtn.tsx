export function deleteTodoBtn({ targetTodo }: DeleteTodoBtnProps) {
  function handleClick() {}

  return (
    <button className="bg-red-500 hover:bg-red-600" onClick={handleClick}>
      Delete
    </button>
  );
}
