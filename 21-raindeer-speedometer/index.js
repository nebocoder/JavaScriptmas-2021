const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")

let destination = [
  {
    name: "Munich",
    distanceFromPrevDestination: 2892,
  },
  {
    name: "Kiev",
    distanceFromPrevDestination: 1111,
  },
  {
    name: "Ulaanbaatar",
    distanceFromPrevDestination: 5324,
  },
  {
    name: "Sydney",
    distanceFromPrevDestination: 5458,
  },
  {
    name: "Tijuana",
    distanceFromPrevDestination: 6531,
  },
  {
    name: "Chicago",
    distanceFromPrevDestination: 1729,
  },
]

function calculateSpeed() {
  // Task:
  // - Retrieve distance from previous destination from array of objects.
  // - Calculate speed and round speed to an integer (whole number).
  // - Display speed in speedometer paragraph.
  const location = destination.findIndex((place) => place.name === select.value)

  speedometer.textContent = Math.round(
    destination[location].distanceFromPrevDestination / time.value
  )
}

select.addEventListener("change", calculateSpeed)
time.addEventListener("change", calculateSpeed)

// Stretch goals:
// - Calculate average overall speed.
// - Display location as North Pole on pageload.
