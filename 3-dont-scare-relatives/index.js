const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const container = document.querySelector(".container")
const body = document.querySelector("body")
const hidden = document.querySelector(".hidden")

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  hidden.style.display = "block"
  container.style.fontFamily = "Mountains of Christmas"
  container.style.background = 'url("img/trees.png")'
  greeting.textContent = "🎅 Merry Christmas! 🎄"
  body.style.background = 'url("img/bg.jpg") no-repeat center/cover'
}

btn.addEventListener("click", fix)

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.
