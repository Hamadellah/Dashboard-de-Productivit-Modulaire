// app.js

import { renderTasks, renderModal } from "./ui.js"
import { renderTimer } from "./timer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderModal();
  renderTasks();

  const timerBtn = document.getElementById("promodoro");
  const tasksContainer = document.querySelector(".tasks");

  timerBtn.addEventListener("click", () => {
    tasksContainer.classList.add("hidden");
    renderTimer();
  });
});
