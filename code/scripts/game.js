class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = 1424;
    this.height = this.canvas.height = 700;
    this.player = new Player(this, 640, 628, 60, 60);
    this.backgroundImg = new Image();
    this.x = 0;
    this.y = 0;
    this.lives = 3;
    this.level = 1;
    this.obstacles = [];
  };

  start = function() {
    setInterval(() => {
      this.clear();
      this.drawBackground();
      this.player.drawChicken('images/chicken.gif');
      this.player.move();
      this.updateObstacles(this.obstacles);
      this.player.checkCollision(this.obstacles);
      this.player.checkWin ();
    }, 10);
  };

  createObstacles = () => {
    let startingOrigin;
    const lanes = [
      {
        yPosition: 30,
        speed: this.getSpeed()
      },
      {
        yPosition: 90,
        speed: this.getSpeed()
      },
      {
        yPosition: 150,
        speed: this.getSpeed()
      },
      {
        yPosition: 210,
        speed: this.getSpeed()
      },
      {
        yPosition: 270,
        speed: this.getSpeed()
      },
      {
        yPosition: 330,
        speed: this.getSpeed()
      },
      {
        yPosition: 390,
        speed: this.getSpeed()
      },
      {
        yPosition: 450,
        speed: this.getSpeed()
      },
      {
        yPosition: 510,
        speed: this.getSpeed()
      },
      {
        yPosition: 570,
        speed: this.getSpeed()
      },
    ];

    for (let i = 0; i < lanes.length; i++) {
      if (Math.floor(Math.random() * 10 + 2) % 2 === 0) {
        let direction;
        switch (lanes[i].yPosition) { 
          case 30:
          case 150:
          case 270:
          case 390:
          case 510:
            startingOrigin = -150;
            direction = 'RIGHT';
            break;
          default:
            startingOrigin = 1400;
            direction = 'LEFT';
            break;
        };

        this.obstacles.push(
          new Obstacle(this, lanes[i].yPosition, startingOrigin, direction, lanes[i].speed)
        );
      }
    };

    setTimeout(() => {
      this.createObstacles();
    }, 1400);
  };

  drawBackground = function() {
    this.backgroundImg.src = './images/road-background.jpg';
    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
   
    let livesSpan = document.getElementById('lives-span');
    livesSpan.innerHTML = `LIVES ${this.lives}`;

    let levelSpan = document.getElementById('level-span');
    levelSpan.innerHTML = `LEVEL ${this.level}`;
  };

  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  updateObstacles = (obstacles) => {
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].draw();
      if (obstacles[i].dir === 'RIGHT') obstacles[i].x += obstacles[i].vx;
      if (obstacles[i].dir === 'LEFT') obstacles[i].x += -obstacles[i].vx;
      if (
        (obstacles[i].dir === 'RIGHT' && obstacles[i].x >= this.width) ||
        (obstacles[i].dir === 'LEFT' && obstacles[i].x < - obstacles[i].width)
      ) {
        obstacles.splice(i, 1);
      }
    }
  };

  getSpeed = function () {
    return this.level * 2 + (Math.floor(Math.random() * this.level * 1.2));
  }
};