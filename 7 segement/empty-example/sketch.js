/**
 * @author Alexi Jamal
 */
function setup() {
  createCanvas(1200, 600);
}

var x = Math.floor(Math.random() * 11);

console.log(x);

function draw() {
   background(60);
  switch (x) {
    case 0:
      node0();
      break;
    case 1:
      node1();
      break;
    case 2:
      node2();
      break;
    case 3:
      node3();
      break;
    case 4:
      node4();
      break;
    case 5:
      node5();
      break;
    case 6:
      node6();
      break;
    case 7:
      node7();
      break;
    case 8:
      node8();
      break;
    case 9:
      node9();
      break;

    default:
      nodeOff();
      break;
  }
}

function nodeOff() {
  push();
  stroke(0);
  //A
  fill(77, 0, 0);
  rect(180, 40, 20, 160, 20);
  //B
  fill(77, 0, 0);
  rect(180, 230, 20, 160, 20);
  //C
  fill(77, 0, 0);
  rect(30, 20, 150, 20, 20);
  //D
  fill(77, 0, 0);
  rect(30, 400, 150, 20, 20);
  //E
  fill(77, 0, 0);
  rect(10, 230, 20, 160, 20);
  //F
  fill(77, 0, 0);
  rect(10, 40, 20, 160, 20);
  //G
  fill(77, 0, 0);
  rect(30, 200, 150, 20, 20);
  pop();
}

function node0() {
  push();
  stroke(0);
  //A
  fill(255, 0, 0);
  rect(180, 40, 20, 160, 20);
  //B
  fill(255, 0, 0);
  rect(180, 230, 20, 160, 20);
  //C
  fill(255, 0, 0);
  rect(30, 400, 150, 20, 20);
  //D
  fill(255, 0, 0);
  rect(10, 230, 20, 160, 20);
  //E
  fill(255, 0, 0);
  rect(10, 40, 20, 160, 20);
  //F
  fill(255, 0, 0);
  rect(30, 20, 150, 20, 20);
  //G
  fill(77, 0, 0);
  rect(30, 200, 150, 20, 20);
  pop();
}

function node1() {
  push();
  stroke(0);
  //A
  fill(255, 0, 0);
  rect(180, 40, 20, 160, 20);
  //B
  fill(255, 0, 0);
  rect(180, 230, 20, 160, 20);
  //C
  fill(77, 0, 0);
  rect(30, 400, 150, 20, 20);
  //D
  fill(77, 0, 0);
  rect(10, 230, 20, 160, 20);
  //E
  fill(77, 0, 0);
  rect(10, 40, 20, 160, 20);
  //F
  fill(77, 0, 0);
  rect(30, 20, 150, 20, 20);
  //G
  fill(77, 0, 0);
  rect(30, 200, 150, 20, 20);
  pop();
}

function node2() {
  push();
  stroke(0);
  //A
  fill(255, 0, 0);
  rect(180, 40, 20, 160, 20);
  //B
  fill(77, 0, 0);
  rect(180, 230, 20, 160, 20);
  //C
  fill(255, 0, 0);
  rect(30, 400, 150, 20, 20);
  //D
  fill(255, 0, 0);
  rect(10, 230, 20, 160, 20);
  //E
  fill(77, 0, 0);
  rect(10, 40, 20, 160, 20);
  //F
  fill(255, 0, 0);
  rect(30, 20, 150, 20, 20);
  //G
  fill(255, 0, 0);
  rect(30, 200, 150, 20, 20);
  pop();
}

function node3() {
  push();
  stroke(0);
  //A
  fill(255, 0, 0);
  rect(180, 40, 20, 160, 20);
  //B
  fill(255, 0, 0);
  rect(180, 230, 20, 160, 20);
  //C
  fill(255, 0, 0);
  rect(30, 400, 150, 20, 20);
  //D
  fill(77, 0, 0);
  rect(10, 230, 20, 160, 20);
  //E
  fill(77, 0, 0);
  rect(10, 40, 20, 160, 20);
  //F
  fill(255, 0, 0);
  rect(30, 20, 150, 20, 20);
  //G
  fill(255, 0, 0);
  rect(30, 200, 150, 20, 20);
  pop();
}

function node4() {
  push();
  stroke(0);
  //A
  fill(255, 0, 0);
  rect(180, 40, 20, 160, 20);
  //B
  fill(255, 0, 0);
  rect(180, 230, 20, 160, 20);
  //C
  fill(77, 0, 0);
  rect(30, 400, 150, 20, 20);
  //D
  fill(77, 0, 0);
  rect(10, 230, 20, 160, 20);
  //E
  fill(255, 0, 0);
  rect(10, 40, 20, 160, 20);
  //F
  fill(77, 0, 0);
  rect(30, 20, 150, 20, 20);
  //G
  fill(255, 0, 0);
  rect(30, 200, 150, 20, 20);
  pop();
}

function node5() {
  push();
  stroke(0);
  //A
  fill(77, 0, 0);
  rect(180, 40, 20, 160, 20);
  //B
  fill(255, 0, 0);
  rect(180, 230, 20, 160, 20);
  //C
  fill(255, 0, 0);
  rect(30, 400, 150, 20, 20);
  //D
  fill(77, 0, 0);
  rect(10, 230, 20, 160, 20);
  //E
  fill(255, 0, 0);
  rect(10, 40, 20, 160, 20);
  //F
  fill(255, 0, 0);
  rect(30, 20, 150, 20, 20);
  //G
  fill(255, 0, 0);
  rect(30, 200, 150, 20, 20);
  pop();
}

function node6() {
  push();
  stroke(0);
  //A
  fill(77, 0, 0);
  rect(180, 40, 20, 160, 20);
  //B
  fill(255, 0, 0);
  rect(180, 230, 20, 160, 20);
  //F
  fill(255, 0, 0);
  rect(30, 20, 150, 20, 20);
  //C
  fill(255, 0, 0);
  rect(30, 400, 150, 20, 20);
  //D
  fill(255, 0, 0);
  rect(10, 230, 20, 160, 20);
  //E
  fill(255, 0, 0);
  rect(10, 40, 20, 160, 20);
  //G
  fill(255, 0, 0);
  rect(30, 200, 150, 20, 20);
  pop();
}
  function node7(){
    push();
    stroke(0);
    //A
    fill(255, 0, 0);
    rect(180, 40, 20, 160, 20);
    //B
    fill(255, 0, 0);
    rect(180, 230, 20, 160, 20);
    //C
    fill(77, 0, 0);
    rect(30, 400, 150, 20, 20);
    //D
    fill(77, 0, 0);
    rect(10, 230, 20, 160, 20);
    //E
    fill(77, 0, 0);
    rect(10, 40, 20, 160, 20);
    //F
    fill(255, 0, 0);
    rect(30, 20, 150, 20, 20);
    //G
    fill(77, 0, 0);
    rect(30, 200, 150, 20, 20);
    pop();
}


function node8() {
  push();
  stroke(0);
  //A
  fill(255, 0, 0);
  rect(180, 40, 20, 160, 20);
  //B
  fill(255, 0, 0);
  rect(180, 230, 20, 160, 20);
  //C
  fill(255, 0, 0);
  rect(30, 400, 150, 20, 20);
  //D
  fill(255, 0, 0);
  rect(10, 230, 20, 160, 20);
  //E
  fill(255, 0, 0);
  rect(10, 40, 20, 160, 20);
  //F
  fill(255, 0, 0);
  rect(30, 20, 150, 20, 20);
  //G
  fill(255, 0, 0);
  rect(30, 200, 150, 20, 20);
  pop();
}

function node9() {
  push();
  stroke(0);
  //A
  fill(255, 0, 0);
  rect(180, 40, 20, 160, 20);
  //B
  fill(255, 0, 0);
  rect(180, 230, 20, 160, 20);
  //C
  fill(255, 0, 0);
  rect(30, 400, 150, 20, 20);
  //D
  fill(77, 0, 0);
  rect(10, 230, 20, 160, 20);
  //E
  fill(255, 0, 0);
  rect(10, 40, 20, 160, 20);
  //F
  fill(255, 0, 0);
  rect(30, 20, 150, 20, 20);
  //G
  fill(255, 0, 0);
  rect(30, 200, 150, 20, 20);
  pop();
}