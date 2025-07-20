import { useRef, useState } from "react";

export default function App() {
  const [lastTodoId, setLastTodoId] = useState(0);
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    setLastTodoId((prevId) => prevId + 1);

    const todoInputValue = todoInputRef.current.value;
    if (todoInputValue.trim().length > 0) {
      setTodos([...todos, { id: lastTodoId, content: todoInputValue }]);
      todoInputRef.current.value = "";
    }
  }

  function deleteTodo(targetTodo) {
    setTodos([...todos.filter((todo) => todo !== targetTodo)]);
  }

  return (
    <div className="h-screen bg-gray-700">
      <div className="flex flex-col justify-center items-center pt-50">
        <form className="flex gap-4">
          <input
            className="bg-white rounded-md px-2 py-2"
            type="text"
            ref={todoInputRef}
          />
          <input
            className="bg-gray-200 rounded-md px-2 cursor-pointer hover:bg-gray-400"
            type="submit"
            value="Add Todo"
            onClick={handleClick}
          />
        </form>
        <div className="mt-4 grid gap-4 overflow-auto max-h-80">
          {todos &&
            todos.map((todo) => (
              <div
                className="flex bg-white rounded-lg p-2 w-100 break-all"
                key={todo.id}
              >
                <div>{todo.content}</div>
                <input
                  className="ml-auto p-2 max-h-fit bg-red-500 hover:bg-red-600 cursor-pointer"
                  type="button"
                  value="Delete Todo"
                  onClick={() => deleteTodo(todo)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
