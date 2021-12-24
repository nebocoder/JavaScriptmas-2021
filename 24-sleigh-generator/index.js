const crew = document.getElementById("crew")
const btn = document.getElementById("btn")

// Task:
// - Write a function to launch the sleigh!
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.

btn.addEventListener("click", () => {
  btn.disabled = true
  crew.classList.toggle("jello")
  setTimeout(() => {
    crew.classList.toggle("jello")
    crew.classList.toggle("bounce-out-top")
  }, 2000)
  setTimeout(() => {
    crew.classList.toggle("bounce-out-top")
    btn.disabled = false
  }, 5000)
})
