class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = 1350;
    this.height = this.canvas.height = 700;
    this.player = new Player(this, 625, 628, 50, 50); // ADJUST FROG POSITION AND SIZE
    this.backgroundImg = new Image();
    this.x = 0;
    this.y = 0;
    this.score = 0;
    this.obstacles = [];
  }
  start = function() {
    setInterval(() => {
      this.clear();
      this.drawBackground();
      //I switched chicken to player.
      this.player.drawChicken('images/chicken.gif');
      this.player.move();
      this.obstacles.forEach(ob => {
        ob.update(this.obstacles);
      });
      if (this.obstacles.length <= 3) {
        this.createObstacles();
      }
      this.player.checkCollision(this.obstacles); // COLLISION
    }, 30);
  };

  //
  createObstacles = () => {
    let startingOrigin;
    const startingHeight = [40, 100, 155, 225, 280, 345, 400, 460, 520, 580];
    for (let i = 0; i < startingHeight.length; i++) {
      if (Math.floor(Math.random() * 10.2 + 1.3) % 2 === 0) {
        let direction;
        switch (startingHeight[i]) {
          case 40:
          case 155:
          case 280:
          case 400:
          case 520:
            startingOrigin = -Math.random() * 300 - 150;
            direction = 'RIGHT';
            break;
          default:
            startingOrigin =
              Math.random() * 1400 < 1300 ? 1400 : Math.random() * 1400;
            direction = 'LEFT';
            break;
        }
        if (this.obstacles.length < 10) {
          this.obstacles.push(
            new Obstacle(this, startingHeight[i], startingOrigin, direction)
          );
        }
      }
    }
  };

  drawBackground = function() {
    // THIS WILL BE A ROAD BACKGROUND
    this.backgroundImg.src = './images/road-background.jpg';
    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.ctx.fillStyle = 'red';
    this.ctx.font = '25px Arial';
    this.ctx.fillText(`Score: ${this.score}`, this.width / 2, 20);
  };

  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
}
