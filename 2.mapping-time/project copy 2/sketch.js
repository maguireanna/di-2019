function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {
  background (255);
  blendMode(EXCLUSION);

  let hr = hour();
  let mn = minute();
  let sc = second();


  noFill();
  strokeWeight(2);
  stroke(0,255,0);
  let end1 = map(sc, 0, 60, 0, 360);
  arc (300, 200, 100, 100, 0, end1 + QUARTER_PI, PIE);


  strokeWeight(2);
  stroke(255,0,0);
  let end2 = map(mn, 0, 60, 0, 360);
  arc (300, 300, 100, 100, 0, end2 + QUARTER_PI, PIE)

  strokeWeight(2);
  stroke(0,0,255);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc (300, 400, 100, 100, 0, end3 + QUARTER_PI, PIE)



}