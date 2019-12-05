class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.car = new Player(this, 625, 628, 70, 70); // ADJUST FROG POSITION AND SIZE
        this.obstacles = [];
        this.background = undefined;
        this.score = 0;
        this.backgroundImg = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 1350;
        this.height = 700;
        
        this.init = function() {
            this.canvas = document.getElementById("canvas");
            this.ctx = this.canvas.getContext('2d');
            this.x = 0;
            this.y = 0;
            this.start();
            this.createObstacles();
        }
        
        this.start = function() {
            this.drawBackground();
            this.drawMainCharacters(); 
            setInterval(() => {
                this.clear();
                this.drawBackground();
                this.drawMainCharacters();
                this.car.move();
                for (let i = 0; i < this.obstacles.length; i++) {
                    this.obstacles[i].move(); 
                    this.obstacles[i].draw();
                    this.car.crashCollision(this.obstacles[i]);
                    if (this.obstacles[i].y > 800) {
                        this.obstacles.splice(i, 1);
                    }
                }
            }, 1000 / 100);
        }
        
        this.createObstacles = function() {
            const startingPositions = [40, 100, 155, 225, 280, 345, 400, 460, 520, 580];
            if (Math.floor(Math.random() * 20) % 2 === 0) {
                let startingPos = startingPositions[Math.floor(Math.random() * startingPositions.length)];
                this.obstacles.push(new Obstacle(this, startingPos));
            }
    
            setTimeout(() => {
                this.createObstacles();
            }, 300); // SETS THE AMOUNT OF TIME TO WAIT BETWEEN CREATION OF OBSTACLES
        }
        
        this.drawBackground = function() { // THIS WILL BE A ROAD BACKGROUND
            this.backgroundImg.src = "./images/road-background.jpg";
            // this.backgroundImg.addEventListener( 'load', function() {
            this.ctx.drawImage( this.backgroundImg, this.x, this.y, this.width, this.height )
            // })
        }

        this.clear = function() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    
        this.drawMainCharacters = function() {
            this.car.drawComponent("images/chicken.gif");
        }
    }
}
