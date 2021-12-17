const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
btn.addEventListener("click", sort)

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
]

// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.

function sort() {
  let nice = ""
  let naughty = ""

  sorteesArr.forEach((item) => {
    if (item.hasBeenGood) {
      nice += `<li>${item.name}</li>`
    } else {
      naughty += `<li>${item.name}</li>`
    }
  })

  niceList.innerHTML = nice
  naughtyList.innerHTML = naughty
}
