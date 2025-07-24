import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import "./todo-list";
import type { Todo } from "./types";

@customElement("todos-area")
export class TodosArea extends LitElement {
  @query("#todo-input")
  _todoInput!: HTMLInputElement;

  @property()
  todos: Todo[] = [];

  private handleSubmit(e: Event): void {
    e.preventDefault();

    const todoText = this._todoInput.value;
    if (todoText.trim().length === 0) return;

    this.addTodo(todoText);
    this._todoInput.value = "";
  }

  private addTodo(todoText: string) {
    this.todos = [...this.todos, { content: todoText }];
  }

  private handleTodosUpdated(e: CustomEvent) {
    const targetTodo = e.detail;
    this.todos = this.todos.filter((todo) => todo !== targetTodo);
  }

  render() {
    return html`
      <form class="add-todo-form" @submit=${this.handleSubmit}>
        <input class="todo-input" id="todo-input" type="text" />
        <button class="add-todo-btn" type="submit">Add Todo</button>
      </form>
      <todo-list
        .todos=${this.todos}
        @todos-updated="${this.handleTodosUpdated}"
      ></todo-list>
    `;
  }

  static styles = css`
    :host {
      display: grid;
      gap: 1rem;
    }

    input,
    button {
      padding-block: 0.25rem;
      padding-inline: 0.375rem;
      border: 0;
      border-radius: 0.3rem;
      font-size: 1.1rem;
    }

    .add-todo-form {
      display: flex;
      justify-content: space-evenly;
      gap: 0.5rem;
    }

    .add-todo-btn {
      background: #1a1aff;
      cursor: pointer;
    }

    .add-todo-btn:hover {
      background: #0000e6;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "todos-area": TodosArea;
  }
}
