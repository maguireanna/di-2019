function setup() {
  createCanvas(800, 300);
  background (0);
}

function draw() {
  
 
  let sc = second();
  let mn = minute();
  let hr = hour();

 

    for (var x = 0; x <= width; x = x + 50) {
      let x = map(sc, 0, 60, 0, width);
      let g = map(mn, 0, 60, 0, 255);
      let al = map(hr % 12, 0, 12, 10, 300);
      strokeWeight (.5);
      fill(g, g, 255);
     ellipse(x, 150, 25, al);
     if (sc > 59) {
      background (200, 220, 200);
     }
    }
 

  }  
