const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();

  target.remove();
};

const addItem = (todo) => {
  if (todo.text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    span.innerText = todo.text;
    deleteBtn.innerText = "삭제";
    deleteBtn.addEventListener("click", delItem);
    li.append(span, deleteBtn);
    ul.append(li);
    li.id = todo.id;

    //왜 여기서 Text="" 는 작동하지 않을까?
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  addItem(todo);
  input.value = "";
});

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    userTodos.forEach((todo) => addItem(todo));
    todos = userTodos;
    console.log(todos);
  }
};
init();
