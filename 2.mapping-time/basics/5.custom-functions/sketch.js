var x = 100

function setup() {
  createCanvas(600, 400);
}

function draw() {
  //background
  background (0);
 
  stroke(255);
  strokeWeight(4);
  noFill()
if (mouseX > 300){
  fill(255,0,200);
}

if (mouseY > 200){
  x = x+1;
}

if (mouseY < 200){
  x = x-1;
}

  ellipse(200, 300, x, x);
}