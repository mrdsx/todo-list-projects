import { AddTodoForm } from "../components/AddTodoForm";
import { TodoList } from "../components/TodoList";

export interface Todo {
  id: number;
  content: string;
}

export default function App() {
  return (
    <div className="h-screen bg-gray-700">
      <div className="flex flex-col justify-center items-center pt-50">
        <AddTodoForm />
        <TodoList />
      </div>
    </div>
  );
}
