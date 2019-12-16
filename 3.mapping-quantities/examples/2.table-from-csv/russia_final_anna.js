var totals
var atmospheric
var underground

function preload(){
  totals = loadTable('data/annamr.csv', 'csv', 'header')
  ests = loadTable('data/annamarussia.csv', 'csv', 'header')
  underground = loadTable('data/annamurussia.csv', 'csv', 'header')
}

function setup(){
  createCanvas(3200, 3800)
  background(25)

  // pick one of the three data files to work with and call it 'table'
  var table = totals
  var yest = ests
  var und = underground

  // log the whole dataset to the console so we can poke around in it
  print(table)
  print (yest)
  print (und)
  // set up typography
  textFont("futura")
  textSize(10)
  fill(30)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 40

  // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    y += rowHeight
  }


  // draw year labels in the header row
  x = 200
  y = 100
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }

 

//square on top
x = 200
for (var r=0; r<table.getRowCount(); r++){
  y = 100
  for (var c=1; c<table.getColumnCount(); c++){
    var value = table.getNum(r, 0)
    stroke(1);
   noFill ();
    rect(x,y-30,30, 30)
   // text(value, x, y)
   y += rowHeight
  }
  x += colWidth
}

//square around text
x = 200
for (var r=0; r<table.getRowCount(); r++){
  y = 100
  for (var c=1; c<table.getColumnCount(); c++){
    var value = table.getNum(r, 0)
    stroke(1);
   noFill ();
    rect(x,y,30, 12)
   // text(value, x, y)
   y += rowHeight
  }
  x += colWidth
}

  // total stockpile
  x = 200
  for (var r=0; r<table.getRowCount(); r++){
    y = 100
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      stroke(1);
      noFill ();
      rect(x,y,30, value/10)
      //text(value, x, y)
      y += rowHeight
    }
    x += colWidth
  }

  //above ground map
  x = 200
  for (var r=0; r<yest.getRowCount(); r++){
    y = 100
    for (var c=1; c<table.getColumnCount(); c++){
      var value = yest.getNum(r, c)
      noStroke();
      let yellowness = map(value, 0, 62,20, 255 )
      fill (0,0,255, yellowness);
      rect(x,y,30, value)
      //text(value, x, y)
      y += rowHeight
    }
    x += colWidth
  }

  //below ground map
  x = 200
  for (var r=0; r<und.getRowCount(); r++){
    y = 100
    for (var c=1; c<table.getColumnCount(); c++){
      var value = und.getNum(r, c)
      let redness = map(value, 0, 57,20, 255)
      fill (255,0,0, redness);
      rect(x,y,30, value)
      //text(value, x, y)
      y += rowHeight
    }
    x += colWidth
  }
 //date on top
 x = 200
 for (var r=0; r<table.getRowCount(); r++){
   y = 100
   for (var c=1; c<table.getColumnCount(); c++){
     var value = table.getNum(r, 0)
     noStroke();
    fill (0);
     //rect(x,y-30,30, 30)
     text(value, x+27, y+10)
    y += rowHeight
   }
   x += colWidth
 }


}