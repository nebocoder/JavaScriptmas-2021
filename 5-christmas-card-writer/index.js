const greetingDisplay = document.getElementById("greeting-display")
const nameDisplay = document.getElementById("name-display")
const btn = document.getElementById("btn")
const senderName = document.getElementById("name")

btn.addEventListener("click", writeGreeting)

const greetings = [
  "Santa Claus is coming to town!",
  "We wish you a Merry Christmas!",
  "Happy holidays!",
  "Ho, ho, ho! Merry Christmas!",
  "Jingle all the way!",
]

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.

function writeGreeting() {
  const randomCard = Math.floor(Math.random() * greetings.length)

  greetingDisplay.textContent = `${greetings[randomCard]}`
  greetingDisplay.classList.add("wiggle")

  if (senderName.value) {
    nameDisplay.textContent = `-${senderName.value}`
  } else {
    nameDisplay.textContent = ""
  }
}
