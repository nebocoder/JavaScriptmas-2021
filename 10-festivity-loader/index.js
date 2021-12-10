const meter = document.getElementById("meter")
const current = new Date().getDate()

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.

function loading() {
  meter.value = current
}

loading()
