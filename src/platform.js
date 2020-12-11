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
    let pT = this.y; //platform 
    let dB = (player.loc.y + player.size / 2);

    stroke("#FF0000");
    strokeWeight(10);
  

    if (Math.abs(pT - dB) < 5 &&  player.vel.y > 0) {
      console.log('flag')
        let lX = this.x; //lower bound x left
        let rX = this.x + this.width; // right

        let x = player.loc.x;
        line(lX, pT, rX, pT);
        if (x >= lX && x <=  rX ) {
          return true;
        }
    }
    return false;
  }
}
