function setup() {
  // put setup code here
  createCanvas(1600, 800, WEBGL);
}

function draw() {
  // put drawing code here

  /**
   * Some notes about p5.js...
   * 
   * 1. Order of stuff is totally important.
   *      Writing the 'fill(150)' after the ellipse won't effect it.
   *      Writing ellipse before the rect (if they are inside each other) will result in having
   *      the rect ABOVE the ellipse. Another example would be 'background()', if it gets called
   *      after everything, I won't see a thing because it would be above all the layers.
   * 
   */

  background(0);

}