let tasks = [];

function addTask() {
  let taskInput = document.getElementById("input-task");
  let taskList = document.getElementById("task-list");

  if (taskInput.value === "") {
    alert("Please enter a task.");
  } else {
    tasks.push(taskInput.value);
    taskInput.value = "";
    renderTaskList(taskList);
  }
}

function renderTaskList(taskList) {
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    let li = document.createElement("li");
    li.innerHTML = task;
    taskList.appendChild(li);
  }
}
