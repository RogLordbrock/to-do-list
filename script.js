//* input a new task

var taskBtn = document.getElementById("task-btn");
taskBtn.onclick = () => {
  const newTask = document.getElementById("new-task").value;
  const added = document.getElementById("list");
  added.insertAdjacentHTML(
    "beforeend",
    `<div class="content">
  <input type="checkbox"/>
  <h3>${newTask}</h3>
</div>`
  );
};
