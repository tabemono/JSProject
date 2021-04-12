# Just Jump

Link to Project
https://tabemono.github.io/Just-Jump/




# Background and Overview

Simple p5 javascript canvas game where you keep climbing up while dodging projectiles.


# -Collision
  collidesWith = (player) => {
    let platformTop = this.altitude;
    let playerBottom = player.loc.y - player.size / 2;

    if (
      Math.abs(platformTop - playerBottom) < -player.vel.y &&
      platformTop < playerBottom
    ) {
      let platformLeftX = this.x; // platform lefter-most x bound
      let platformRightX = this.x + this.size; // platform righter-most x bound

      let playerLeftX = player.loc.x - player.size / 2; // player lefter-most x bound
      let playerRightX = player.loc.x + player.size / 2; // player righter-most x bound

      return (
        (playerLeftX >= platformLeftX && // if the player's left X falls between the platform
          playerLeftX <= platformRightX) ||
        (playerRightX >= platformLeftX && // if the player's right X falls between the platform
          playerRightX <= platformRightX)
      );
    }

    return false;
  };


# Functionality and MVPS

- controllable player from arrow keys and space bar
- have each level with obstacles that shoot projeciles from the side
-scalable canvas levels that goes up



# Architexture and Technology

-Javascript
-Canvas
-Webpack & Babel 
-p5 library


# Future implementations
* Add more styling with sprites and music
