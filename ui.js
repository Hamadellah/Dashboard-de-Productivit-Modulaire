

import { getTasks, addTask, deleteTask } from "./todo.js";

export function renderTasks() {
  const container = document.querySelector(".tasks");
  container.innerHTML = "";

  getTasks().forEach((task) => {
    container.innerHTML += `
      <div class="bg-white shadow rounded-xl p-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="text-4xl">${task.icon}</div>
          <div>
            <h4 class="font-semibold">${task.title}</h4>
            <p class="text-sm text-gray-500">${task.category}</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-gray-600 font-medium">
            • ${task.time} min
          </span>

          <button 
            class="deleteBtn text-red-500 hover:text-red-700"
            data-id="${task.id}"
          >
            ✖
          </button>
        </div>
      </div>
    `;
  });
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        deleteTask(id);
        renderTasks();
      });
    });
}

export function renderModal() {
  const ajouter = document.getElementById("ajouter");

  ajouter.innerHTML = `
    <div class="flex justify-center">
      <button id="openModal" class="px-4 py-2 bg-blue-500 text-white rounded">
        Ajouter une tâche
      </button>
    </div>

    <div id="taskModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
      <div class="bg-white rounded-xl shadow-lg w-96 p-6 relative">
        <button id="closeModal" class="absolute top-3 right-3 text-xl">&times;</button>

        <h2 class="text-xl font-semibold mb-4">Nouvelle Tâche</h2>

        <form id="taskForm" class="flex flex-col gap-4">
          <input id="titre" type="text" placeholder="Titre" class="px-4 py-2 border rounded" required />
          <input id="time" type="number" placeholder="Durée" class="px-4 py-2 border rounded" required />
          <input id="icone" type="text" placeholder="Emoji" class="px-4 py-2 border rounded" required />

          <select id="cat" class="px-4 py-2 border rounded" required>
            <option value="">Choisir catégorie</option>
            <option value="Travail">Travail</option>
            <option value="Personnel">Personnel</option>
            <option value="Sport">Sport</option>
          </select>

          <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded">
            Ajouter
          </button>e 
        </form>
      </div>
    </div>
  `;

  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  const taskModal = document.getElementById("taskModal");
  const form = document.getElementById("taskForm");

  openModal.addEventListener("click", () => {
    taskModal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", () => {
    taskModal.classList.add("hidden");
  });

  taskModal.addEventListener("click", (e) => {
    if (e.target === taskModal) {
      taskModal.classList.add("hidden");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTask = {
      title: document.getElementById("titre").value,
      category: document.getElementById("cat").value,
      time: document.getElementById("time").value,
      icon: document.getElementById("icone").value,
    };

    addTask(newTask);
    form.reset();
    taskModal.classList.add("hidden");
    renderTasks();
  });
}