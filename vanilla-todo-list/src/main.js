import "./style.css";

const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

const addTodoBtn = document.querySelector("#add-todo");
addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (todoInput.value.trim().length <= 0) return;

  const todoItem = createTodoItem();
  todoList.appendChild(todoItem);
  todoInput.value = "";
});

function createTodoItem() {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const todoText = createTodoText(todoInput.value);
  const deleteTodoBtn = createDeleteTodoBtn(todoItem);

  todoItem.append(todoText, deleteTodoBtn);

  return todoItem;
}

function createTodoText(todoContent) {
  const todoText = document.createElement("span");
  todoText.classList.add("todo-text");
  todoText.textContent = todoContent;
  return todoText;
}

function createDeleteTodoBtn(todoItem) {
  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.classList.add("delete-todo-btn");
  deleteTodoBtn.textContent = "Delete Todo";
  deleteTodoBtn.onclick = () => todoItem.remove();
  return deleteTodoBtn;
}
