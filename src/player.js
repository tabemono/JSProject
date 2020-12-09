// const context = canvas.getContext("2d");
// import { loadImage } from "./loaders.js";
var sprite;
// var runningAnimation;
// var jumpingAnimation;
// var gameBackground;
// var platformBackground;
// var gameFont;
// var gameMusic;
// var gameOverMusic;

class Player {
  constructor(x, y, enemy, size, color) {
    this.loc = createVector(x, y);
    this.vel = createVector(0, (!enemy) -20, 0);
    this.color = color;
    this.size = size;
    this.enemy = enemy;
    // this.height = 34;
    // this.width = 37;
    // this.frameX = 0;
    // this.frameY = 0;
    // sprite = createSprite(50, 100, 25, 40);
    
    // sprite.addAnimation('jump', jumpingAnimation);
    // sprite.addAnimation('run', runningAnimation);
    // sprite.setCollider('rectangle', 0, 0, 10,41);
  }


  preload = () => {
    sprite = loadImage("./sprite.jpg");
    

  };

  update = () => {
    // if (this.enemy) {

    //  } else {
    //     this.vel.y += GRAVITY;
    //     }
    this.loc.add(this.vel);
    this.vel.x *= 0.8;
  };

  applyForce = (force) => {
    this.vel.add(force);
  };

  jump = () => {
    this.vel.y *= 0;
    this.applyForce(0, -10);
  }
  //   drawSprite(img, spriteX, spriteY, spriteW, spriteH, destX, destY, dW, dH) {
  //     context.drawImage(
  //       img,
  //       spriteX,
  //       spriteY,
  //       spriteW,
  //       spriteH,
  //       destX,
  //       destY,
  //       dW,
  //       dH
  //     );
  //   }

  draw = () => {
    // const playerImg = new Image()
    // playerImg.src = './assets/images/player.png';
    // image(sprite, this.loc.x, this.loc.y);
    drawSprites(sprite);
    strokeWeight(3);
    fill(this.color);
    ellipse(this.loc.x, this.loc.y, this.size);
  };
}
