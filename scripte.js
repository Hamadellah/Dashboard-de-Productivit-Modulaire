let tasks = [
  { title: "Meditation", category: "Mind", time: 25, icon: "🧘🏻‍♂️" },
  { title: "Cardio", category: "Sport", time: 25, icon: "🏃" },
  { title: " home work", category: "work", time: 25, icon: "👩🏽‍💻" },
];

function afficherTasks() {
  const container = document.querySelector(".tasks");
  container.innerHTML = "";

  tasks.forEach((task) => {
    container.innerHTML += `
      <div class="task flex">
        <div class="icon">
        <p class="text-5xl">${task.icon}</p>
        </div>
              <div class="red flex ">
                <div class=" ml-[10%] title-cat">
                <h4>${task.title}</h4>
                <p>${task.category} </p>
              </div>
             <div class="details ">
              <p>• ${task.time} min</p>
             </div>
        </div>
      </div>
    `;
  });
}

afficherTasks();
