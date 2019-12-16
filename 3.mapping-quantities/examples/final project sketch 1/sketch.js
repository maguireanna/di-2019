var totals
//var atmospheric
//var underground

function preload(){
  totals = loadTable('data/treedata.csv', 'csv', 'header')
  //ests = loadTable('data/annamarussia.csv', 'csv', 'header')
  //underground = loadTable('data/annam3urussia.csv', 'csv', 'header')
}

function setup(){
  createCanvas(5000, 800)
  background(255)

  // pick one of the three data files to work with and call it 'table'
  var table = totals
 // var yest = ests
  //var und = underground

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
  var colWidth = 200

  // draw country name labels on the left edge of the table
  //textStyle(BOLD)
  //textAlign(RIGHT)
  //for (var c=1; c<table.getColumnCount(); c++){
    //text(table.columns[c], x-colWidth, y)
    //y += rowHeight
 // }


  //draw emitters labels in the header row
  x = 180
  y = 600
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }



  // total trees
  x = 200
  for (var r=0; r<table.getRowCount(); r++){
    y = 300
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      stroke(200);
       fill(0,255,0);
      ellipse(x,y-value,10, 10)
      //text(value, x, y)
      y += rowHeight
    }
    x += colWidth
    
  }

  




}