class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.chicken = new Player(this, 625, 628, 70, 70); // ADJUST FROG POSITION AND SIZE
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
                this.chicken.move();
                for (let i = 0; i < this.obstacles.length; i++) {
                    this.obstacles[i].move(); 
                    this.obstacles[i].draw();
                    // this.chicken.crashCollision(this.obstacles[i]);
                    if (this.obstacles[i].y > 700) {
                        this.obstacles.splice(i, 1);
                    }
                }
                // this.checkCollision();
            }, 1000 / 100);
        }
        
        this.createObstacles = function() {
            const startingHeight = [40, 100, 155, 225, 280, 345, 400, 460, 520, 580];
            if (Math.floor(Math.random() * 25) % 2 === 0) {
            let startingH = startingHeight[Math.floor(Math.random() * startingHeight.length)];
            let startingOrigin = 0;
                if (startingH == 40, 155, 280, 400, 520) {
                     startingOrigin = -100; // SETS STARTING ORIGIN TO LEFT SIDE OF THE SCREEN
                }
                else startingOrigin = 1450; // SETS STARTING ORIGIN TO RIGHT SIDE OF THE SCREEN
            this.obstacles.push(new Obstacle(this, startingH, startingOrigin));
            }
        }

        // this.obstacleDirection = function() {
        //     const startingHeight = [40, 100, 155, 225, 280, 345, 400, 460, 520, 580];
        //     if (Math.floor(Math.random() * 20) % 2 === 0) {
        //         let startingH = startingHeight[Math.floor(Math.random() * startingHeight.length)];
        //         this.obstacles.push(new Obstacle(this, startingH));
        //     }
    
        setTimeout(() => {
            this.createObstacles();
        }, 300); // SETS THE AMOUNT OF TIME TO WAIT BETWEEN CREATION OF OBSTACLES
        
        this.drawBackground = function() { // THIS WILL BE A ROAD BACKGROUND
            this.backgroundImg.src = "./images/road-background.jpg";
            // this.backgroundImg.addEventListener( 'load', function() {
            this.ctx.drawImage( this.backgroundImg, this.x, this.y, this.width, this.height )
            // })
        }
        
        this.drawMainCharacters = function() {
            this.chicken.drawComponent("images/chicken.gif");
        }

        // this.checkCollision = function () {
        //         let collisionRight = ((this.obstacles[i].x + chicken.width - 20 >= obstacles.x  ) && (chicken.x <= obstacles.x));
        //         let collisionLeft = ((chicken.x + 20 <= obstacles.x + obstacles.width) && (chicken.x + chicken.width >= obstacles.x + obstacles.width));
        //         let collisionTop = ((chicken.y + 20 <= obstacles.y + obstacles.height) && (chicken.y + chicken.height >= obstacles.y + obstacles.height));
        //         let ccollisionBottom = ((chicken.y + chicken.height - 20 >= obstacles.y) && (chicken.y <= obstacles.y));
                
        //         if ((collisionRight || collisionLeft) && (collisionTop || ccollisionBottom)) 
        //         // return true;
        //         console.log ('crash')
        //         return false;
        //       }

        this.clear = function() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}