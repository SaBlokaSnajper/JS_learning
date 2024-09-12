const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false }); // Add a new task with completed flag as false
    taskInput.value = ""; // Clear the input field
    displayTasks(); // Display the updated task list
  }
}

function displayTasks() {
  taskList.innerHTML = ""; // Clear the current list
  tasks.forEach((task, index) => {
    const li = document.createElement("li"); // Create a new list item
    li.innerHTML = `<input type="checkbox" id="task-${index}" ${
      task.completed ? "checked" : ""
    }>
            <label for="task-${index}">${task.text}</label>`;
    li.querySelector("input").addEventListener("change", () =>
      toggleTask(index)
    );
    taskList.appendChild(li); // Append the new task to the list
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed; // Toggle task completion
  displayTasks(); // Update the display
}

function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed); // Remove completed tasks
  displayTasks(); // Update the display
}

// Add event listeners for button clicks (without invoking the functions directly)
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Initial display of tasks
displayTasks();
