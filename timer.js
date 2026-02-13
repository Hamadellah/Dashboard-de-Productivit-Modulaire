// timer.js

let interval = null;
let timeLeft = 25 * 60; // 25 minutes

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}

export function renderTimer() {
  const promo = document.getElementById("promodor");

  promo.innerHTML = `
  <div class="bg-white w-80 h-[500px] rounded-2xl shadow-xl flex flex-col items-center p-6">

    <button id="backBtn" class="mb-4 text-sm text-blue-500">
      ← Back
    </button>

    <div class="relative w-48 h-48 flex items-center justify-center mb-6">
      <div class="absolute inset-0 rounded-full border-[12px] border-orange-500"></div>

      <div class="w-40 h-40 bg-gray-100 rounded-full flex flex-col items-center justify-center shadow-inner">
        <span id="timerDisplay" class="text-3xl font-bold text-gray-700">
          ${formatTime(timeLeft)}
        </span>
      </div>
    </div>

    <div class="flex items-center gap-8 mt-8">

      <button id="resetBtn">🔄</button>
      <button id="startBtn">▶</button>
      <button id="stopBtn">⏹</button>

    </div>
  </div>
  `;

  setupTimerEvents();
}

function setupTimerEvents() {
  const display = document.getElementById("timerDisplay");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const resetBtn = document.getElementById("resetBtn");

  startBtn.addEventListener("click", () => {
    if (interval) return;

    interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        display.textContent = formatTime(timeLeft);
      } else {
        clearInterval(interval);
        interval = null;
        alert("Session Finished ✅");
      }
    }, 1000);
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    timeLeft = 25 * 60;
    display.textContent = formatTime(timeLeft);
  });
}
