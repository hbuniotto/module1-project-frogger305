class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
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
                    case 83:
                        if (this.x <= 1300 - this.width) this.x += 60; // HOW FAR RIGHT THE PLAYER CAN MOVE
                        break;
                    case 40: // DOWN
                    case 68:
                        if (this.y <= 650 - this.height) this.y += 60;
                        break;
                }
            }
        };
    }

    crashCollision(ele) {
        if (
            (this.y + 20 < ele.y + ele.height &&
                this.x + 15 < ele.x + ele.width &&
                this.x + this.width - 15 > ele.x) ||
            (ele.y + ele.height > this.y &&
                ele.x < this.x + this.width &&
                this.x < ele.x + ele.width)
        ) {
            setTimeout(() => alert("DEAD!"), 5);
            window.location.reload();
        }
    }
}
