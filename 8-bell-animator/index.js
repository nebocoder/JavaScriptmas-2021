const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
// Credit: https://www.freesoundslibrary.com/jingle-bells-track/
const jingle = new Audio("jingle-bells.mp3")
const volume = document.getElementById("volume")
const bell = document.getElementById("bell")

// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped.

//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.

playBtn.addEventListener("click", () => {
  jingle.play()
  bell.classList.add("jingle")
})

pauseBtn.addEventListener("click", () => {
  jingle.pause()
  bell.classList.remove("jingle")
})

stopBtn.addEventListener("click", () => {
  jingle.pause()
  bell.classList.remove("jingle")
  jingle.currentTime = 0
})

volume.addEventListener("input", () => {
  jingle.volume = volume.value / 100
})
