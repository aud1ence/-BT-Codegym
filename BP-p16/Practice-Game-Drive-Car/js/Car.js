const SPEED = 20;

class Car {
    constructor(x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('game');
        this.cxt = this.canvas.getContext('2d');
        this.img = img;
    }

    draw() {
        this.cxt.beginPath();
        this.cxt.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.cxt.stroke();
    }

    move(event) {
        this.clear();
        switch (event.keyCode) {
            case 37 :
                this.moveLeft()
                break;
            case 38 :
                this.moveUp()
                break;
            case 39 :
                this.moveRight()
                break;
            case 40 :
                this.moveDown()
                break;
        }
        this.draw();

    }

    moveLeft() {
        this.x -= SPEED;
    }
    moveUp() {
        this.y -= SPEED;
    }
    moveRight() {
        this.x += SPEED;
    }
    moveDown() {
        this.y += SPEED;
    }

    clear() {
        this.cxt.clearRect(this.x, this.y, this.width, this.height);
    }
}