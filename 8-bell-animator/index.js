const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
// Credit: https://www.freesoundslibrary.com/jingle-bells-track/
const jingle = new Audio("jingle-bells.mp3")
const volume = document.getElementById("volume")

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

volume.addEventListener("input", () => {
  jingle.volume = volume.value / 100
})
