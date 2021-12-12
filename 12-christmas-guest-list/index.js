const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = [
  "Partner",
  "Nice Relative 1",
  "Nice Relative 2",
  "Evil Relative",
  "Lonely Neighbour",
]

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals:
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?

function renderGuestList() {
  let list = ""
  guests.forEach((guest) => {
    list += `<li>${guest}</li>`
  })
  guestList.innerHTML += list
}

function addGuest() {
  guestList.innerHTML += `<li>${input.value}</li>`
  input.value = ""
}

renderGuestList()
btn.addEventListener("click", addGuest)
