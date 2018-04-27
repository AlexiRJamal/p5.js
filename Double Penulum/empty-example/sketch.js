//Alexi Jamal
//Code created for a simulation of double pendulum by Dan Shiffman but in p5.js library
/**
 * @param r1
 * Stands for length of rod 1
 * @param r2
 * Stands for length of rod 2
 * @param m1
 * Stands for mass 1
 * @param m2
 * Stands for mass 2
 * @param a1
 * Stands for angle 1
 * @param a2
 * Stands for angle 2
 * @param g
 * Gravity (universal value=9.8). For the graphics rendering purposes, set to g=1
 * @param pg
 * 'createGraphics' function. To be used later
 * @param px2
 * previous pixel of x
 * @param py2
 * previous pixel of y
 * 
 * 'vel' and 'acc' stand for 'velocity' and 'acceleration' respectively
 * 
 */

//Variables 'r1' and 'r2' are named in char 'r' because "looks like a one in coding which is kinda confusing"

let r1 = 200;
let r2 = 200;
let m1 = 30;
let m2 = 30;
let a1 = Math.PI / 2;
let a2 = Math.PI / 2;
let a1_vel = 0;
let a2_vel = 0;
let g = 1;
//var pg;
let px2 = -1;
let py2 = -1;

function setup() {
  // put setup code here
  createCanvas(1200, 600);
  //pg = createGraphics(900, 900);
}

function draw() {
  // put drawing code here
  background(0);

  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2_vel * a2_vel * r2 + a1_vel * a1_vel * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));

  let a1_acc = (num1 + num2 + num3 * num4) / den;

  num1 = 2 * sin(a1 - a2);
  num2 = (a1_vel * a1_vel * r1 * (m1 + m2));
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_vel * a2_vel * r2 * m2 * cos(a1 - a2);
  den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));

  let a2_acc = (num1 * (num2 + num3 + num4)) / den;

  //image(pg, 0, 0);
  //translate is for drawing the line in a predefined box
  translate(500, 200);

  var x1 = r1 * sin(a1);
  var y1 = r1 * cos(a1);

  var x2 = x1 + (r2 * sin(a2));
  var y2 = y1 + (r2 * cos(a2));

  stroke(255);
  strokeWeight(3);
  line(0, 0, x1, y1);

  ellipse(x1, y1, m1, m1);

  stroke(255);
  strokeWeight(3);
  line(x1, y1, x2, y2);

  ellipse(x2, y2, m2, m2);

//Tried drawing a line for the past 4 hours, I GIVE UP...

  // pg.beginShape();
  // pg.translate(300, 50);
  // pg.stroke(255);
  // pg.strokeWeight(1);
  // pg.line(px2, py2, x2, y2);
  // pg.endShape();

  a1_vel += a1_acc;
  a2_vel += a2_acc;
  a1 += a1_vel;
  a2 += a2_vel;

  px2 = x2;
  py2 = y2;

}