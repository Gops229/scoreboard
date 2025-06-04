let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let resetHomeEl = document.getElementById("reset-home");
let resetGuestEl = document.getElementById("reset-guest");

function addOneHome() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function addTwoHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function addThreeHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function addOneGuest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function addTwoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function addThreeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

resetHomeEl.addEventListener("click", function () {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;
});

resetGuestEl.addEventListener("click", function () {
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
});

let timerDisplay = document.getElementById("timer");
let timerInterval;
let totalTime = 600; // in seconds (10 minutes)
let isRunning = false;

function updateTimerDisplay() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(() => {
    if (totalTime > 0) {
      totalTime--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      isRunning = false;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  totalTime = 600;
  updateTimerDisplay();
  isRunning = false;
}

// Initialize on page load
updateTimerDisplay();
