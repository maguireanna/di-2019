function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {
  background (0);
  var now = clock()

  //let hr = now.hour();
  //let mn = now.minute();
  //let sc = now.second();

  //this is the seconds clock
  noFill();
  strokeWeight(2);
  stroke(0,255,0);
  let end1 = map(now.sec, 0, 60, 0, 360);
  arc (300, 200, 100, 100, 0, end1 + QUARTER_PI, PIE);

  // this is the minutes clock
  strokeWeight(2);
  stroke(255,0,0);
  let end2 = map(now.min, 0, 60, 0, 360);
  arc (300, 300, 100, 100, 0, end2 + QUARTER_PI, PIE)

  //this is the hour clock
 strokeWeight(2);
  stroke(0,0,255);
  let end3 = map(now.hour % 12, 0, 12, 0, 360);
  arc (300, 400, 100, 100, 0, end3 + QUARTER_PI, PIE)

}