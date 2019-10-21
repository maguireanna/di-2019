function setup() {
  createCanvas(300, 700);

}

function draw() {
  background (200, 220, 200);

  let hr = hour();
  let mn = minute();
  let d = day();
  let m = month();
  

  //this is the seconds clock
  
  noStroke();

  


  let yoik = map(d, 0, 31, 0, 700);
  let yok = map(d, 0, 31, 0, 255);
  fill(80, yok, 100, 90);
  rect (0, yoik, 300, 30);



  let yoi = map(m, 0, 12, 0, 700);
  let yo = map(m, 0, 12, 0, 255);
  fill(80, yo, 100, 90);
  rect (0, yoi, 300, 30);


  // this is the minutes clock
  //strokeWeight(2);
//let g = map(mn, 0, 60, 0, 255);
  //fill(g);
  //rect (200, 0, 200, 400);

  //this is the hour clock
  //strokeWeight(2);
  //let b = map(hr % 12, 0, 12, 0, 255);
  //fill(b);
  //rect (400, 0, 200, 400);

}