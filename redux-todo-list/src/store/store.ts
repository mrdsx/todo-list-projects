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
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    incrementLastTodoId: (state) => {
      state.lastTodoId += 1;
    },
  },
});

export const { addTodo, deleteTodo, incrementLastTodoId } = todosSlice.actions;

export const store = configureStore({
  reducer: todosSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
