const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
  // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
  if (christmassifierBtn.textContent === "Christmassify") {
    greeting.classList.add("christmassified")
    christmassifierBtn.classList.add("christmassified")
    christmassifierBtn.textContent = "De-christmassify"
  } else if ((christmassifierBtn.textContent = "De-christmassify")) {
    greeting.classList.remove("christmassified")
    christmassifierBtn.classList.remove("christmassified")
    christmassifierBtn.textContent = "Christmassify"
  }
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.
