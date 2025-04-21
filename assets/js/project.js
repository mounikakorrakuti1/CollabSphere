// project.js

document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("task-form");
  const taskList = document.getElementById("task-list");

  if (taskForm && taskList) {
    taskForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const taskInput = document.getElementById("task-input");
      if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        li.addEventListener("click", function () {
          li.classList.toggle("completed");
        });
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });
  }
});
