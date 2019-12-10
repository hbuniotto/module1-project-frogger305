class Obstacle extends Component {
    constructor(game, y, origin) {
        super(game);
        this.game = game;
        this.y = y;
        this.origin = x == -100
        // this.origin = x == -100 ? 2 : -2 // CHECKS THE ORIGIN AND SETS INCREMENT / DECREMENT ON X
        this.x = x;
        this.width = 100;
        this.height = 50;
        this.img = new Image();
    }

    draw() {
        this.img.src = "images/obstacle-lamborguini.png";
        this.game.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
            );
    }

    move() { // DETERMINE IF THE OBSTACLES WILL MOVE FROM L>R OR R>L
        if (Math.floor(Math.random() % 2) === 0) {
            if (this.origin == -100) {
                this.x += 1
            }
            else this.x -= 1
        }
        //     if (this.x == -100)
        //     this.x += 2;
        // }
        // else this.x -= 2
    }
}