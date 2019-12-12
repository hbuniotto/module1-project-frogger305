class Obstacle {
  constructor(game, y, x, d) {
    this.game = game;
    this.y = y;
    this.x = x;
    this.vx = 2; // CHECKS THE ORIGIN AND SETS INCREMENT / DECREMENT ON X
    this.width = 120;
    this.height = 60;
    this.dir = d;
    this.img = new Image();
    this.img.setAttribute('class', 'rotate');
  }

  update(obstacles) {
    // console.log('Output for obstacles', obstacles);
    this.draw();
    for (let i = 0; i < obstacles.length; i++) {
      this.vx = Math.random() * 2 < 0.4 ? 1 : Math.random() * 2;
      //to move obstacles to right or left
      if (obstacles[i].dir === 'RIGHT') obstacles[i].x += this.vx;
      if (obstacles[i].dir === 'LEFT') obstacles[i].x += -this.vx;
      //to return obstacles back to original or about that location which they had
      if (
        (obstacles[i].dir === 'RIGHT' && obstacles[i].x >= this.game.width) ||
        (obstacles[i].dir === 'LEFT' && obstacles[i].x < -this.width)
      ) {
        // obstacles[i].x *= -this.vx;
        obstacles.splice(i, 1);
      }
      //   if (obstacles[i].dir === 'LEFT' && obstacles[i].x < -this.width) {
      //     // obstacles[i].x *= -12;
      //     obstacles.splice(i, 1);
      //   }
    }
  }

  draw() {
    this.img.src = 'images/obstacle-lamborguini.png';
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
