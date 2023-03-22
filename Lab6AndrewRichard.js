let speedX, x, directionX, speedY, y, directionY;
function setup() {
  createCanvas(600, 600);
  speedX = 2;
  directionX = 1;
  x = width / 2;
  speedY = 2;
  directionY = 1;
  y = height / 2;
  cherryX = random(500);
  cherryY = random(500);
  puckmanX = 0;
  puckmanY = 0;
  // cherryEaten = true;
  cherryEaten = false;
}

function draw() {
  background(0, 0, 255);
  cherry(cherryX, cherryY, 0.5);

  puckmanX += speedX * directionX;
  puckmanY += speedY * directionY;
  puckman(puckmanX, puckmanY, 0.3);

  if (x + 30 >= width || x <= 30) {
    // check if hits the right/left
    speedX *= -0.5;
  }
  if (y + 30 >= height || y <= 30) {
    // check if hits top/bottom
    speedY *= -0.5;
  }

  let puckmanEatsCherry = dist(puckmanX, puckmanY, cherryX, cherryY);
  if (puckmanEatsCherry < 50) {
    cherryEaten = true;
  } else {
    cherryEaten = false;
  }
  console.log("The distance is : " + puckmanEatsCherry)
}

function puckman(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  if (cherryEaten == true) {
    strokeWeight(5);
    fill(255, 255, 0);
    arc(0, 0, 180, 180, 2, 360);
    fill(0);
    ellipse(-30, -20, 20, 20);
  } else if (cherryEaten == false) {
    strokeWeight(5);
    fill(255, 255, 0);
    arc(0, 0, 180, 180, 16, 360);
    fill(0);
    ellipse(0, -40, 20, 20);
  }
  pop();
}

function cherry(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  fill(255, 0, 0);
  ellipse(0, 0, 30);
  ellipse(35, 5, 30);
  fill(255);
  noStroke();
  ellipse(-10, 0, 5);
  ellipse(-5, 5, 5);
  ellipse(25, 5, 5);
  ellipse(30, 10, 5);

  stroke(200, 255, 100);
  strokeWeight(5);
  noFill();
  beginShape();
  vertex(5, -5);
  vertex(55, -50);
  vertex(35, 0);
  endShape();

  pop();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    speedY -= 1;
  }
  if (keyCode == DOWN_ARROW) {
    speedY += 1;
  }
  if (keyCode == LEFT_ARROW) {
    speedX -= 1;
  }
  if (keyCode == RIGHT_ARROW) {
    speedX += 1;
  }
}
