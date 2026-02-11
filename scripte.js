let tasks = [
  { id: 1, title: "Meditation", category: "Mind", time: 25, icon: "🧘🏻‍♂️" },
  { id: 2, title: "Cardio", category: "Sport", time: 25, icon: "🏃" },
  { id: 3, title: "Home work", category: "Work", time: 25, icon: "👩🏽‍💻" },
];

function afficherTasks() {
  const container = document.querySelector(".tasks");
  const ajouter = document.getElementById("ajouter");

  // Inject modal + button
  ajouter.innerHTML = `
  <div class="flex justify-center">
    <button id="openModal" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Ajouter une tâche
    </button>
  </div>

  <!-- Modal -->
  <div id="taskModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
    <div class="bg-white rounded-xl shadow-lg w-96 p-6 relative">
      
      <button id="closeModal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
        &times;
      </button>

      <h2 class="text-xl font-semibold mb-4">Nouvelle Tâche</h2>

      <form id="taskForm" class="flex flex-col gap-4">
        
        <input
          id="titre"
          type="text"
          placeholder="Titre de la tâche"
          class="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          id="time"
          type="number"
          placeholder="Durée en minutes"
          class="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          id="icone"
          type="text"
          placeholder="Emoji icône"
          class="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />

        <select
          id="cat"
          class="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Choisir catégorie</option>
          <option value="Travail">Travail</option>
          <option value="Personnel">Personnel</option>
          <option value="Sport">Sport</option>
        </select>

        <button
          type="submit"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Ajouter
        </button>
      </form>
    </div>
  </div>
  `;

  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  const taskModal = document.getElementById("taskModal");
  const form = document.getElementById("taskForm");

  // Ouvrir modal
  openModal.addEventListener("click", () => {
    taskModal.classList.remove("hidden");
  });

  // Fermer modal
  closeModal.addEventListener("click", () => {
    taskModal.classList.add("hidden");
  });

  // Fermer si clic dehors
  taskModal.addEventListener("click", (e) => {
    if (e.target === taskModal) {
      taskModal.classList.add("hidden");
    }
  });

  // Ajouter task
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let newTask = {
      id: tasks.length + 1,
      title: document.getElementById("titre").value,
      category: document.getElementById("cat").value,
      time: document.getElementById("time").value,
      icon: document.getElementById("icone").value,
    };

    tasks.push(newTask);

    form.reset();
    taskModal.classList.add("hidden");
    afficherTasks();
  });

  // Affichage tasks
  container.innerHTML = "";

  tasks.forEach((task) => {
    container.innerHTML += `
      <div class="bg-white shadow rounded-xl p-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="text-4xl">${task.icon}</div>
          <div>
            <h4 class="font-semibold">${task.title}</h4>
            <p class="text-sm text-gray-500">${task.category}</p>
          </div>
        </div>
        <div class="text-gray-600 font-medium">
          • ${task.time} min
        </div>
      </div>
    `;
  });
}

afficherTasks();
const promo = document.getElementById("promodor");
function promodoor() {
  promo.innerHTML = ``;
}
