const btn = document.getElementById("btn")
const timer = document.getElementById("timer")

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.

let startingMinutes = 15
let time = startingMinutes * 60

function updateTimer() {
  btn.disabled = true

  const countdown = setInterval(() => {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60

    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds

    timer.textContent = `${minutes}:${seconds}`
    time--

    if (time < 0) {
      clearInterval(countdown)
      startingMinutes = 15
      timer.textContent = "You got this!"
    }
  }, 1000)
}

btn.addEventListener("click", updateTimer)
