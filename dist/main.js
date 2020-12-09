import SpriteSheet from "../src/sprite_sheet.js";
import { loadImage } from "../src/loaders.js";

var canvas = document.getElementById("screen");

var c = canvas.getContext("2d");

// loadLevel('1-1')
//   .then(level => {
//     console.log(level);
//   })

loadImage("../assets/images/rocks.png").then((image) => {
  const sprites = new SpriteSheet(image, 100, 20);
  sprites.define("bg", 1, 0);

  for (let x = 0; x < 25; ++x) {
    for (let y = 0; y < 14; ++y) {
      sprites.drawTile("bg", c, x, y);
    }
  }
});

loadImage("../assets/images/stone.png").then((image) => {
  const sprites = new SpriteSheet(image, 40, 16);
  sprites.define("ground", 6, 10);

  for (let x = 0; x < 25; x++) {
    for (let y = 12; y < 14; y++) {
      sprites.drawTile("ground", c, x, y);
    }
  }
});
