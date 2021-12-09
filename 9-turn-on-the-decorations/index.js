const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
const body = document.querySelector("body")
const container = document.querySelector(".container")
decorator.addEventListener("click", deckTheHalls)

function deckTheHalls() {
  // Task:
  // Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled.
  if (decorator.checked) {
    house.textContent = "🎅⛄🏡🎄🦌"
    body.classList.add("santa-bg")
    container.classList.add("transparent-bg")
  } else {
    house.textContent = "🏡"
    body.classList.remove("santa-bg")
    container.classList.remove("transparent-bg")
  }
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
