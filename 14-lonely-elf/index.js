const elf = document.getElementById("elf")
const elfBtn = document.getElementById("elfBtn")
const teaBtn = document.getElementById("teaBtn")
const deerBtn = document.getElementById("deerBtn")
const elfZone = document.getElementById("elf-hangout-zone")

elfBtn.addEventListener("click", addElf)
teaBtn.addEventListener("click", addTea)
deerBtn.addEventListener("click", addDeer)

function addElf() {
  // Task:
  // - Write a function to duplicate the elf when the button is clicked.
  // - See index.css for optional styling challenges.
  if (elfZone.childElementCount < 101) {
    elfZone.innerHTML += `<div class="elf">🧝</div>`
  }
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.

function addTea() {
  if (elfZone.childElementCount < 101) {
    elfZone.innerHTML += `<div class="tea">🍵</div>`
  }
}

function addDeer() {
  if (elfZone.childElementCount < 101) {
    elfZone.innerHTML += `<div class="deer">🦌</div>`
  }
}
