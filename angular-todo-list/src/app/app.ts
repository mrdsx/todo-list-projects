import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Todo {
  content: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular Todo List');
  protected readonly todos = signal<Todo[]>([]);

  addTodo(e: Event, inputRef: HTMLInputElement): void {
    e.preventDefault();
    const content = inputRef.value;

    if (content.trim().length <= 0) return;

    const newTodo = { content };
    this.todos.update((todos) => [...todos, newTodo]);

    inputRef.value = '';
  }

  deleteTodo(targetTodo: Todo): void {
    this.todos.update((todos) => todos.filter((todo) => todo !== targetTodo));
  }
}
