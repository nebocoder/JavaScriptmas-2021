const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")

const jingle = new Audio("jingle-bells.mp3")

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

playBtn.addEventListener("click", () => {
  jingle.play()
})

pauseBtn.addEventListener("click", () => {
  jingle.pause()
})

stopBtn.addEventListener("click", () => {
  jingle.pause()
  jingle.currentTime = 0
})

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
