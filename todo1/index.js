const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

let todos = [];
const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addTodo(todo);
  save();
  input.value = "";
});

const addTodo = (userTodo) => {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todoItem");
  const li = document.createElement("li");
  li.innerText = userTodo.text;
  li.id = userTodo.id;
  console.log(li.id);
  console.log(userTodo.id);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", delTodo);
  todoItem.append(li, deleteBtn);
  ul.append(todoItem);
};

const init = () => {
  userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    todos = userTodos;
    save();
    userTodos.forEach((userTodo) => {
      addTodo(userTodo);
    });
  }
};

const delTodo = (e) => {
  const target = e.target.parentNode;
  target.remove();
  todos = todos.filter((todo) => todo.id != target.firstChild.id);
  save();
};
init();
