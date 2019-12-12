class Player {
  constructor(game, x, y, w, h) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img = new Image();
  }
  
  move() {
    document.onkeydown = event => {
      const key = event.keyCode;
      const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
        switch (key) {
          case 37: // LEFT
          case 65:
            if (this.x >= 30) this.x -= 60;
            break;
          case 38: // UP
          case 87:
            if (this.y >= 5) this.y -= 60;
            break;
          case 39: // RIGHT
          case 68:
            if (this.x <= 1300 - this.width) this.x += 60; // HOW FAR RIGHT THE PLAYER CAN MOVE
            break;
          case 40: // DOWN
          case 83:
            if (this.y <= 650 - this.height) this.y += 60;
            break;
        }
      }
    };
  }

  drawChicken(imgSource) {
    let daCtx = this.game.ctx;
    this.img.src = imgSource;
    daCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  checkCollision = function(obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
      let obstacle = obstacles[i];
      let collisionRight =
        this.x + this.width - 20 >= obstacle.x && this.x + 20 < obstacle.x;
      let collisionLeft =
        this.x + 20 <= obstacle.x + obstacle.width &&
        this.x + this.width - 20 > obstacle.x + obstacle.width;
      let collisionTop =
        this.y + 20 <= obstacle.y + obstacle.height &&
        this.y + this.height - 20 > obstacle.y + obstacle.height;
      let collisionBottom =
        this.y + this.height - 20 >= obstacle.y && this.y < obstacle.y;
      if (
        (collisionRight || collisionLeft) &&
        (collisionTop || collisionBottom)
      ) {
        //here something happens
        console.log('crash');
        return true;
      }
    }
  };
}
