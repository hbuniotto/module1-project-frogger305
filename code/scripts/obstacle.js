class Obstacle extends Component {
    constructor(game, y) {
        super(game);
        this.game = game;
        this.y = y;
        this.x = - 100; // SET MANUALLY TO LEFT CORNER
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

    move() {
        if (10 === 10 && Math.floor(Math.random() % 1) === 0) {
            this.x += 2;
            // call function to check if collision
        }
    }
};