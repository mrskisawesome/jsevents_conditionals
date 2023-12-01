console.log("testing");

// global variable to start
let bg = "#e2d7f3";
let day = "Friday";
// get the button DOM node
const colourBtn = document.getElementById("colourBtn");

//def the func
function changeColour() {
  //change text of button
  colourBtn.textContent = `How I feel on ${day}`;
  //change
  if (bg === "#e2d7f3") {
    bg = "#222222";
    day = "Monday";
  } else {
    bg = "#e2d7f3";
    day = "Friday";
  }

  // set the background colour of our page to be the value of bg
  document.body.style.background = bg;
}
//event listener
colourBtn.addEventListener("click", changeColour);
