let tasks = [
  { id: 1, title: "Meditation", category: "Mind", time: 25, icon: "🧘🏻‍♂️" },
  { id: 2, title: "Cardio", category: "Sport", time: 25, icon: "🏃" },
  { id: 3, title: "Home work", category: "Work", time: 25, icon: "👩🏽‍💻" },
];

export function getTasks() {
  return tasks;
}

export function addTask(task) {
  task.id = Date.now();
  tasks.push(task);
}
export function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}
