function setup() {
  createCanvas(600, 400);

}

function draw() {
  background (0);

  let hr = hour();
  let mn = minute();
  let sc = second();

  //this is the seconds clock
  
  strokeWeight(2);

  let r = map(sc, 0, 60, 0, 255);
  fill(r, 0, 0);
  rect (0, 0, 200, 400);

  // this is the minutes clock
  strokeWeight(2);
  let g = map(mn, 0, 60, 0, 255);
  fill(0,g,0);
  rect (200, 0, 200, 400);

  //this is the hour clock
  strokeWeight(2);
  let b = map(hr % 12, 0, 12, 0, 255);
  fill(0,0,b);
  rect (400, 0, 200, 400);

}