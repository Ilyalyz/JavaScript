const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
   list.innerHTML = "";
   tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task;
      list.appendChild(li);
   });
}

addBtn.onclick = () => {
   const task = input.value.trim();
   if (task) {
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      render();
      input.value = "";
   }
};
render();