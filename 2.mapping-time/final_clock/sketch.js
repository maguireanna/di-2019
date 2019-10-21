function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist,
          y:cy+sin(theta) * dist}
}

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES)
}

function draw() {
  background (240);
  var now = clock()


  stroke(255); 
  strokeWeight(.5);

//year
 
 let hueyear = map(now.progress.year, 0, 1, 0, 255);
fill(20,20, 25, hueyear);
let end4 = map(now.progress.year, 0, 1, 1, 360);
arc (400, 300, 500, 500, 0, end4 + QUARTER_PI, PIE)
noFill();
ellipse (400, 300, 500, 500)

//week
 
let hueweek = map(now.progress.week, 0, 1, 0, 255);
fill(249,100,55), hueweek;
let end6 = map(now.progress.week, 0, 1, 1, 360);
arc (400, 300, 400, 400, 0, end6 + QUARTER_PI, PIE)
noFill();
ellipse (400, 300, 400,400)

//day

let hueday = map(now.progress.day, 0, 1, 0, 255);
fill(235,184,78,hueday);
let end5 = map(now.progress.day, 0, 1, 1, 360);
arc (400, 300, 300, 300, 0, end5 + QUARTER_PI, PIE)
noFill();
ellipse (400, 300, 300,300)

//this is the hour clock
fill(240)
ellipse (400, 300, 200,200)
  //let huehour = map(now.progress.hour, 0, 1, 0, 255);
  //fill(25,132,181, huehour);
  //let end3 = map(now.progress.hour % 12, 0, 1, 0, 360);
  //arc (400, 300, 200, 200, 0, end3 + QUARTER_PI, PIE)
 // noFill();
 // ellipse (400, 300, 200, 200)



// this is the minutes clock
  //minutes?
  var minAngle = map(now.min, 0, 1, 0, 360)
  var minScale = map(now.min, 0, 1, 55, 55)
  var origin = {x:width/2, y:height/2}
  var minLocation = pointAt(origin.x, origin.y, minAngle, 100)
  fill(240)
  
  stroke(255)
  circle(minLocation.x, minLocation.y, minScale)
  fill(25,132,181)
  let end2 = map(now.progress.min, 0, 1, 0, 360);
  arc (minLocation.x, minLocation.y, minScale, minScale, 0, end2 + QUARTER_PI, PIE)

  //secclock
  var secAngle = map(now.sec, 0, 1, 0, 360)
  var secScale = map(now.sec, 0, 1, 25, 25)
  var origin = {x:width/2, y:height/2}
  var secLocation = pointAt(origin.x, origin.y, secAngle, 100)
  fill(240)
  
  stroke(255)
  circle(secLocation.x, secLocation.y, secScale)
  fill(83,177,89)
  let end9 = map(now.progress.sec, 0, 1, 0, 360);
  arc (secLocation.x, secLocation.y, secScale, secScale, 0, end9 + QUARTER_PI, PIE)

  
  




  //let huemin = map(now.min, 0, 60, 0, 255);
  //fill(83,177,89,huemin);
  //let end2 = map(now.min, 0, 60, 0, 360);
  //arc (400, 300, 100, 100, 0, end2 + QUARTER_PI, PIE)
  //noFill();
  //ellipse (400, 300, 100, 100)

//this is the seconds clock
 
//let huesec = map(now.sec, 0, 60, 0, 255);
 // fill(82,78,142,huesec);
 // let end1 = map(now.sec, 0, 60, 0, 360);
//  arc (400, 300, 50, 50, 0, end1 + QUARTER_PI, PIE);
 // noFill();
//  stroke(255)
 // ellipse (400, 300, 50, 50)


}