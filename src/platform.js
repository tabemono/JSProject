class Platform  {
  constructor(x, y, width, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.color = color;
  }

  draw = () => {
    stroke(255);
    strokeWeight(3);
    fill(this.color);
    rect(this.x, this.y, this.width, 15);
  };

  collidesWith = (player) => {
    // console.log(this.y, player.loc.y);
    if (this.y - player.y + player.size / 2 < 5 ) {
      console.log('flag');
      if(player.vel.y > 0) {
        console.log('flag');
        return true;
      }
    }
    return false;
  }
}
