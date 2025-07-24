import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Todo } from "./types";

@customElement("todo-list")
export class TodoList extends LitElement {
  @property()
  todos!: Todo[];

  private deleteTodo(targetTodo: Todo) {
    this.dispatchEvent(
      new CustomEvent("todos-updated", {
        detail: targetTodo,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`<div class="todos">
      ${this.todos.map(
        (todo) => html`
          <div class="todo">
            <span>${todo.content}</span>
            <button
              class="delete-todo-btn"
              @click=${() => this.deleteTodo(todo)}
            >
              Delete
            </button>
          </div>
        `
      )}
    </div>`;
  }

  static styles = css`
    .todos {
      display: grid;
      gap: 0.75rem;
    }

    .todo {
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
      background: white;
      border-radius: 0.25rem;
      max-width: 20rem;

      span {
        align-self: center;
        text-align: start;
        word-break: break-all;
      }
    }

    .delete-todo-btn {
      padding-block: 0.25rem;
      padding-inline: 0.375rem;
      background: #fb2c36;
      border: 0;
      border-radius: 0.3rem;
      font-size: 1.1rem;
      cursor: pointer;
      max-height: fit-content;
    }

    .delete-todo-btn:hover {
      background: rgb(235, 0, 0);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "todo-list": TodoList;
  }
}
