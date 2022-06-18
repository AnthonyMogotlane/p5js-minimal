//An array of nice color codes we shall pick from
let niceColors = ["#FFBA08", "#FAA307", "#F48C06", "#E85D04", "#DC2F02", "#D00000", "#9D0208", "6A040F", "#370617", "#03071E"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();  //uncomment this if you DON'T want animation
}

function draw() {
  noStroke();
  let chosenColor = random(niceColors);
  fill(chosenColor);
  let size = random(20, 80);
  circle(mouseX, mouseY, size);
}

//Allow clearing the canvas by clicking...
function mousePressed() {
  background(255);
}
