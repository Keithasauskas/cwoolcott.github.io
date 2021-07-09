var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// Renders Todo as LI lists
function renderTodos() {
  // clear todo list and sets count span to length of array
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render LI for each TODO
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// At Page Load check storage and convert to object, and renders TODO
function init() {
  // parse TODOS from local storage making an OBJECT
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // CHECKING if data returning exists
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // Calling render todos function
  renderTodos();
}

function storeTodos() {
  // Turns Obj into String and Stores it
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // If blank goto prior function or exit function
  if (todoText === "") {
    return;
  }
  // adds item to array, reset input to empty
  todos.push(todoText);
  todoInput.value = "";
  // Stores and Re-Renders
  storeTodos();
  renderTodos();
});

// REmoves items from the list
todoList.addEventListener("click", function (event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
