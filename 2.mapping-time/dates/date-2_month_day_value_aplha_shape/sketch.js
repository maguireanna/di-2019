function setup() {
  createCanvas(600, 600);

}

function draw() {
  background (255);
  
  let m = month();
  let d = day();

 

    for (var x = 0; x <= width; x = x + 50) {
      let x = map(m, 0, 12, 0, width);
      let g = map(d, 0, 31, 0, width);
      
      let fa = map(m, 0, 12, 1, 50);
      let th = map(d, 0, 31, 0, 50);
      
    noStroke();
    //month
    fill(0, 0 ,0, fa);
     rect (50, 50, x, x, 5);

     //day
   
     fill(0, 0, 0, th);
     ellipse(300, 300, g, g);
    }
    
 

  }  
