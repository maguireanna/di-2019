

function setup() {
  createCanvas(1000, 150);
  
}

function draw() {
  background (255,240,230);
  var now = clock()
  //let hr = hour();
  //let mn = minute();
  //let sc = second();

  //this is the seconds clock
  noStroke();
  
  fill (210, 90, 80);
  
  let end1 = map(now.sec, 0, 60, 0, 1000);
  ellipse (end1, 25, 25, 25);



  fill (235, 245, 80);
  
  let end2 = map(now.min, 0, 60, 0, 1000);
  triangle(end2, 75, end2+ 25, 58, end2 + 25, 90);

  fill (110, 90, 200);
  
  let end3 = map(now.hour % 12, 0, 12, 0, 1000);
  rect(end3, 110, 25, 25);


  // this is the minutes clock
 // strokeWeight(2);
  //stroke(255,0,0);
  //let end2 = map(mn, 0, 60, 0, 360);
  //arc (300, 300, 100, 100, 0, end2 + QUARTER_PI, PIE)

  //this is the hour clock
  //strokeWeight(2);
  //stroke(0,0,255);
  //let end3 = map(hr % 12, 0, 12, 0, 360);
  //arc (300, 400, 100, 100, 0, end3 + QUARTER_PI, PIE)



}