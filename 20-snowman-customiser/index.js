const colorOne = document.getElementById("color")
const colorTwo = document.getElementById("color2")
const colorThree = document.getElementById("color3")
const eyes = document.querySelectorAll(".eye")
const nose = document.querySelector(".nose")
const buttons = document.querySelectorAll(".button")

colorOne.addEventListener("input", () => {
  for (let eye of eyes) {
    eye.style.backgroundColor = colorOne.value
  }
})

colorTwo.addEventListener("input", () => {
  nose.style.borderColor = `transparent transparent transparent ${colorTwo.value}`
})

colorThree.addEventListener("input", () => {
  for (let button of buttons) {
    button.style.backgroundColor = colorThree.value
  }
})

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.
