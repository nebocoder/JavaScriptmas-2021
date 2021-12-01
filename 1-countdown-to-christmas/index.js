const countdownDisplay = document.getElementById("countdown-display")
const countdownText = document.getElementById("countdown-text")
const christmas = new Date("Dec 24, 2021 23:59:59").getTime()

let christmasInterval = setInterval(function renderCountdown() {
  // Task:
  // - Get today's date (you only need the day).
  const current = new Date().getTime()
  // - Calculate remaining days.
  const timeLeft = christmas - current
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
  // - Display remaining days in countdownDisplay.
  countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`

  if (timeLeft < 0) {
    clearInterval(christmasInterval)
    countdownDisplay.textContent = "Merry Christmas🎅"
    countdownText.textContent = "Christmas is here!"
  }
}, 1000)

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
