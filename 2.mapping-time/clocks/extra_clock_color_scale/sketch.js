var secondscirc = {
  x: 500,
  y: 300,
  diameter: 300
};

function setup() {
  createCanvas(1000, 600);
  
}

function draw() {
  background (255);

  let hr = hour();
  let mn = minute();
  let sc = second();

  //this is the seconds clock
  noStroke();
  let end1 = map(sc, 0, 60, 0, 255);
  fill (255, 0, end1);
  ellipse(secondscirc.x, secondscirc.y, secondscirc.diameter, secondscirc.diameter);
 // secondscirc.x = secondscirc.x + 1
//if 

  // this is the minutes clock
 
  let end2 = map(mn, 0, 60, 0, 255);
  fill (0, end2, 255);
  ellipse(550, 300, 200, 200);
  //let end2 = map(mn, 0, 60, 0, 360);
  //arc (300, 300, 100, 100, 0, end2 + QUARTER_PI, PIE)

  //this is the hour clock
  let end3 = map(hr % 12 , 0, 12, 0, 255);
  fill (end3, 255, 0);
  ellipse(600, 300, 100, 100);
  //let end3 = map(hr % 12, 0, 12, 0, 360);
  //arc (300, 400, 100, 100, 0, end3 + QUARTER_PI, PIE)



}