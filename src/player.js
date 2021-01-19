
class Player {


  constructor(x, altitude, enemy, size, color) {
  this.loc = createVector(x, altitude);
  this.vel = createVector(0, 0);

  this.maxY = altitude; // max altitude
  this.premaxY = altitude; // previous max altitude

  this.force = 12;

  this.color = color;
  this.size = size;

  this.enemy = enemy; // enemy or not

  this.drone = 0; // enemy Players drone across the screen

  this.onScreen = true;
}

/**
 * changes loc based upon vel
 * moves enemy Players across the screen
 */
update =  () => {
  if (this.enemy) {
    // drone across the screen

    this.drone += map(this.maxY, 0, 15000, 0.0001, 0.1);
    this.loc.x = Math.sin(this.drone) * (width / 2) + width / 2;
  } else {
    /* change locationation based upon velocityocationity and add air resistance */
    this.loc.add(this.vel);
    this.vel.x *= 0.8;

    // apply GRAVITY
    player.applyForce(createVector(0, GRAVITY));

    // update maximum altitude
    this.maxY = this.loc.y > this.maxY ? this.loc.y : this.maxY;
  }
};

/**
 * sets velocityocationity to mimic a hop
 */
jump =  () => {
  this.vel.y *= 0;

  if (this.premaxY == this.maxY) {
    // stronger hop as the altitude remains constant

    this.force = constrain(this.force + 1, 12, 16);
  } else {
    this.force = 12;
  }

  this.applyForce(createVector(0, this.force));

  this.premaxY = this.maxY;
};

/**
 * adds force to the velocityocationity
 */
applyForce =  (force) => {
  this.vel.add(force);
};

/**
 * returns whether or not the player collides with another player
 */
collidesWith = (player) => {
  var distance = dist(player.loc.x, player.loc.y, this.loc.x, this.loc.y);

  if (distance < this.size / 2 + player.size / 2) {
    // distance is greater than radii combined

    if (player.loc.y < this.loc.y) {
      // underneath player

      endGame();
      return false;
    } else {
      return true;
    }
  }
};

/**
 * draws the player with specific altitiude translation
 */
draw =  (altitude) => {
  stroke(255);
  strokeWeight(3);
  fill(this.color);

  if (this.enemy) {
    // draw relative to platforms

    if (altitude - this.loc.y < height) {
      // if it is on-screen

      ellipse(this.loc.x, altitude - this.loc.y + height / 2, this.size);
    } else {
      this.onScreen = false;
    }
  } else {
    // draw regularly

    ellipse(this.loc.x, height / 2, this.size);
  }
};
}