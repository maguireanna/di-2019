function setup() {
  createCanvas(600, 400);

}

function draw() {
  background (0);
  var now = clock()
  //let hr = hour();
  //let mn = minute();
  //let sc = second();

  //this is the seconds clock
  
  strokeWeight(2);

  let r = map(now.sec, 0, 60, 0, 255);
  fill(r);
  rect (0, 0, 200, 400);

  // this is the minutes clock
  strokeWeight(2);
  let g = map(now.min, 0, 60, 0, 255);
  fill(g);
  rect (200, 0, 200, 400);

  //this is the hour clock
  strokeWeight(2);
  let b = map(now.hour % 12, 0, 12, 0, 255);
  fill(b);
  rect (400, 0, 200, 400);

}