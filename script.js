// select the red button with the query selectors
let stop = document.querySelector("#stopButton");
let slow = document.querySelector("#slowButton");
let go = document.querySelector("#goButton");

// Add event listeners
stop.addEventListener("click", illuminateRed);
slow.addEventListener("click", illuminateYellow);
go.addEventListener("click", illuminateGreen);

// Illuminate red light
function illuminateRed() {
  clearLights();
  document.querySelector("#stopLight").style.backgroundColor = "red";
}

// Illuminate yellow light
function illuminateYellow() {
  clearLights();
  document.querySelector("#slowLight").style.backgroundColor = "yellow";
}

// Illuminate green light
function illuminateGreen() {
  clearLights();
  document.querySelector("#goLight").style.backgroundColor = "green";
}

// Clear lights
function clearLights() {
  document.querySelector("#stopLight").style.backgroundColor = "black";
  document.querySelector("#slowLight").style.backgroundColor = "black";
  document.querySelector("#goLight").style.backgroundColor = "black";
}
