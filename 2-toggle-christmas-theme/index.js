const body = document.getElementById("body")
const themeSwitch = document.getElementById("theme-switch")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.

themeSwitch.addEventListener("change", () => {
  if (body.classList.contains("christmas")) {
    body.classList.add("snow")
    body.classList.remove("christmas")
  } else if (body.classList.contains("snow")) {
    body.classList.add("christmas")
    body.classList.remove("snow")
  }
})
