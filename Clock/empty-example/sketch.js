function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(50);
    translate(200,200);

    //Start from top
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    //Seconds
    strokeWeight(8);
    noFill();
    stroke(153, 0, 153);
    let secondAngle = map(sc, 0, 59, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);

    //Minutes
    strokeWeight(6);
    noFill();
    stroke(0, 153, 153);
    let minuteAngle = map(mn, 0, 59, 0, 360);
    arc(0, 0, 280, 280, 0, minuteAngle);

    //Hours
    strokeWeight(4);
    noFill();
    stroke(0, 153, 0);
    let hourAngle = map(hr%12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, hourAngle);

    //Angles and lines to represent a clock
    push();
    rotate(secondAngle);
    stroke(153,0,153);
    line(0,0,100,0);
    console.log(hr+':'+mn+':'+sc);
    pop();

    push();
    rotate(minuteAngle);
    stroke(0,153,153);
    line(0,0,80,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(0,153,0);
    line(0,0,60,0);
    pop();


    //   fill(255);
    //   noStroke();
    //   text(hr+':'+mn+':'+sc, 10, 200);
}