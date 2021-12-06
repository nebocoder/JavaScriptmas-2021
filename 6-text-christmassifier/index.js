const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
const body = document.querySelector("body")
const container = document.querySelector(".container")

// Credit: https://www.freesoundslibrary.com/jingle-bells-track/
const bells = new Audio("audio/jingle-bells.mp3")
bells.volume = 0.5

christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
  // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"

  if (christmassifierBtn.textContent === "Christmassify") {
    body.style.background = "url('img/christmas-colour.png')"
    container.style.background = "url('img/trees.png')"
    greeting.classList.add("christmassified")
    christmassifierBtn.classList.add("christmassified")
    christmassifierBtn.textContent = "De-christmassify"
    bells.play()
  } else if ((christmassifierBtn.textContent = "De-christmassify")) {
    body.style.background = "var(--light-green)"
    container.style.background = "var(--snow)"
    greeting.classList.remove("christmassified")
    christmassifierBtn.classList.remove("christmassified")
    christmassifierBtn.textContent = "Christmassify"
    bells.pause()
  }
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.
