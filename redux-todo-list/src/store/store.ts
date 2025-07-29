import {
  createSlice,
  configureStore,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Todo } from "../app/App";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    lastTodoId: 0,
    todos: [] as Todo[],
  },
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.lastTodoId += 1;
      const newTodo = { id: state.lastTodoId, content: action.payload };
      state.todos = [...state.todos, newTodo];
    },
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export const store = configureStore({
  reducer: todosSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
