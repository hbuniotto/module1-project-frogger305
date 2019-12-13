class Obstacle {
  constructor(game, y, x, d, speed) {
    this.game = game;
    this.y = y;
    this.x = x;
    this.vx = speed; // CHECKS THE ORIGIN AND SETS INCREMENT / DECREMENT ON X
    this.width = 120;
    this.height = 60;
    this.dir = d;
    this.img = new Image();
    this.img.setAttribute('class', 'rotate');
    let arrayOfImages = [
      'images/yellow_lamborguini.png',
      'images/red_car.png',
      'images/blue_car.png',
      'images/motorcycle.png',
      'images/cafetera.gif'
    ];
    this.img.src = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
  }

  draw() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
