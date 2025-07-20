import "./style.css";

const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

const addTodoBtn = document.querySelector("#add-todo");
addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (todoInput.value.trim().length > 0) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.textContent = todoInput.value;

    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
});
