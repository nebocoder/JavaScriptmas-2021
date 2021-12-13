const btn = document.getElementById("btn")
const food = document.getElementById("food")
const guestsInput = document.getElementById("guests-input")
const vegetarianInput = document.getElementById("vegetarian-input")

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

btn.addEventListener("click", selectMeal)

function selectMeal() {
  if (guestsInput.value === "0" || !guestsInput.value) {
    alert("Please enter the number of guests.")
  } else {
    if (vegetarianInput.checked) {
      food.textContent = "Mushroom Risotto!"
    } else if (guestsInput.value <= 4) {
      food.textContent = "Honey Roasted Pork Loin!"
    } else if (guestsInput.value > 4) {
      food.textContent = "Herb Roasted Turkey!"
    }
  }
}
