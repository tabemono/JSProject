// import "./styles/index.scss";

var GRAVITY = 0.8;
var player;

var platforms = [];
// console.log("hello");

function setup() {
  createCanvas(400, 600);
  player = new Player(width / 2, height - 90, false, 30, color("red"));

  //platform
  // platforms.push(new Platform(player.loc.x ,player.loc.y + 50,00, color('gray')))
  for (let dY = 0; dY < height; dY += 50) {
    for (let i = 0; i < 3; i++) {
  
        let x = noise(i, dY) * width;
        if (noise(dY, i) > 0.5)
          platforms.push(new Platform(x, dY, 55, color("orange")));
        // let y = noise(i * i) * height;
      
    }
  }
}

function draw() {
  background(52);

  player.update();
  player.draw();
  player.applyForce(createVector(0, GRAVITY));

  if (player.loc.y > height) {
    //end game
    endGame();
  }

  for (let i = 0; i < platforms.length; i++) {
    platforms[i].draw();
    if(platforms[i].collidesWith(player)) {
      player.applyForce(0, -10);
    }
  }
  handleKeys();
}

function handleKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    player.applyForce(-1, 0);
  } else if (keyIsDown(RIGHT_ARROW)) {
    player.applyForce(1, 0);
  }
}

function endGame() {
  textAlign(CENTER);
  noStroke();
  textSize(60);
  fill("blue");
  text("Game Over", width / 2, height / 2);
}

function keyPressed() {
  console.log(keyCode);

  if (keyCode == 32) {
    //jumpcode
    player.applyForce(createVector(0, -35));
  }
}
