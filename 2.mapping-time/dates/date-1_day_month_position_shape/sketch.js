function setup() {
  createCanvas(600, 600);

}

function draw() {
  background (250, 0, 0);
  
  let sc = second();
  let mn = minute();
  let hr = hour();
  let m = month();
  let d = day();

 

    for (var x = 0; x <= width; x = x + 50) {
      let x = map(m, 0, 12, 0, width);
      let g = map(d, 0, 31, 0, width);
      
      let fa = map(m, 0, 12, 1, 100);
      let th = map(d, 0, 31, 0, 255);
      
    
    //month
      strokeWeight(fa)
     line (x, x, 0, x);

     //day
     strokeWeight(0);
   
     fill(0, th, 255);
     rect (g, g, 90, 90);
    }
    
 

  }  
