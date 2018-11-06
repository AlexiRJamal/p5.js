//Scale: how big are these squares, how many pixels do they take.
var scl = 20;
var cols, rows;

function setup() {
  createCanvas(600, 600, WEBGL);

  cols = width / scl;
  rows = height / scl;
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  //translate(width/2, height/2);
  rotateX(PI/3);

  translate(-width/2, -height/2);
  //For creating the squares
  for (var y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, random(-10, 10));
      vertex(x*scl, (y+1)*scl, random(-10, 10));
      //rect(x*scl, y*scl, scl, scl);
    }
    endShape();
  }
}
