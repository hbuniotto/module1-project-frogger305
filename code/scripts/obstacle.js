class Obstacle extends Component {
    constructor(game, y, x) {
        super(game);
        this.game = game;
        this.y = y;
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
            if (this.x == -100)
            this.x += 2;
        }
        else this.x -= 2
    }
}