function setup() {
  createCanvas(600, 600);

}

function draw() {
  background (255);
  var now = clock()
  //let m = month();
  //let d = day();

 

    for (var x = 0; x <= width; x = x + 50) {
      let x = map(now.progress.year, 0, 1, 0, width);
      let g = map(now.day, 0, 31, 0, 500);
      
      let fa = map(now.progress.year, 0, 12, 1, 50);
      let th = map(now.day, 0, 31, 0, 50);
      
    noStroke();
    //month
    fill(50, 225 ,250, fa);
     rect (50, 50, x, x, 5);

     //day
   
     fill(225, 255, 0, th);
     ellipse(300, 300, g, g);
    }
    
 

  }  
