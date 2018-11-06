var x, y;

function setup() {
  createCanvas(600, 600);
  background(51);
  x = 200;
  y = 200;
}

function draw() {
  /**
   * It's all about values.
   * 1: right
   * 2: left
   * 3: up
   * 4: down
   */

  stroke(255);
  strokeWeight(2);
  point(x, y);
  //console.log('x: '+x+'\ny: '+y);

  var ran = floor(random(4));


  switch (ran) {
    case 0:
      x = x + 2;
      break;
    case 1:
      x = x - 2;
      break;
    case 2:
      y = y + 2;
      break;
    case 3:
      y = y - 2;
      break;
  }

}