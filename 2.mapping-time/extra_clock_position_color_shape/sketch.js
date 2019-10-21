function setup() {
  createCanvas(800, 300);
  background (0);
}

function draw() {
  
  var now = clock()

  //let sc = second();
  //let mn = minute();
  //let hr = hour();

  if (now.sec == 0 && now.min == 0 && now.hours == 0) {
    background (0);
   }

    for (var x = 0; x <= width; x = x + 50) {
      let x = map(now.sec, 0, 60, 0, width);
      let g = map(now.min, 0, 60, 0, 255);
      let al = map(now.hours % 12, 0, 12, 10, 300);
      strokeWeight (.5);
      fill(random (0, 225), g + 30, g + 25);
     ellipse(x, 150, 25, al);
     
    
    }
 
    
  }  
