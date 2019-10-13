// functions example


// regular setup function
function setup(){
  createCanvas(400, 300);
  background(255, 255, 255);
}

// regular draw function
function draw(){
  background(0);

  // mouseX & mouseY are automatic variables that give the current mouse position,
  // let's pass them to our custom function
  rect (mouseX, mouseY, 30, 30);
}