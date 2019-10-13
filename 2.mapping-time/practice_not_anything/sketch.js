var cucle = {
  x:0,
  y: 200,
  diameter: 50
};

var cucle2 = {
  x: 600,
  y: 20,
  diameter: 109
};

var ccolor = {
  r: 244,
  g: 200,
  b: 50

};



function setup () {
  createCanvas(600, 400);
}

function draw() {

  let hr = hour();
  let mn = minute();
  let sc = second();

  
  background (ccolor.r, ccolor.g, ccolor.b);

  fill (250, 200, 200);
  ellipse(cucle.x, cucle.y, cucle.diameter, cucle.diameter);


  fill (250, 200, 200);
  ellipse(cucle2.x, cucle2.y, cucle2.diameter, cucle2.diameter);

  cucle.x = cucle.x + 1;

  cucle2.x = cucle2.x - 1;
}