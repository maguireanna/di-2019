var totals


function preload(){
  totals = loadTable('data/treedata.csv', 'csv', 'header')
 
}

function setup(){
  createCanvas(5000, 1300)
  background(255)

  
  var table = totals
 

  // log the whole dataset
  print(table)
 
  // set up typography
  textFont("futura")
  textSize(10)
  fill(30)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 200
  var colWidth = 100

  //draw country name labels on the left edge of the table
  //textStyle(BOLD)
  //textAlign(RIGHT)
  //for (var c=1; c<table.getColumnCount(); c++){
  //text(table.columns[c], x-colWidth, y)
 // y += rowHeight
  //}


  //draw emitters labels in the header row
 //x = 180
  //y = 600
  //textStyle(NORMAL)
  //textAlign(RIGHT)
  //for (var r=0; r<table.getRowCount(); r++){
   // var year = table.getString(r, 0)
   // text(year, x, y-rowHeight)
   // x += colWidth
 // }



  // total trees
  
  x = 100
  //this is the amount of rows it shows?
  for (var r=0; r<table.getRowCount(); r++){
    y = 1100
    //
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
     
      stroke(0);
      strokeWeight(1);
      noFill();
      ellipse(x,y-value, value + 10, value + 10)
      //text(value, x, y)
      y += rowHeight
    }
    x += colWidth
    
  }

  
  //x = 200
  //for (var r=0; r<table.getRowCount(); r++){
   // y = 300
   // for (var c=1; c<table.getColumnCount(); c++){
    //  var value = table.getNum(r, c)
    //  stroke(200);
    //   fill(0,255,0);
    //  ellipse(x,y-value,10, 10)
      //text(value, x, y)
    //  y += rowHeight
   // }
   // x += colWidth
    



}