let enemies = [];
class Enemy {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.canvas = document.getElementById('game');
        this.cxt = this.canvas.getContext('2d');
    }

    draw() {
        this.cxt.beginPath();
        this.cxt.arc(this.x*Math.random(), this.y*Math.random(), this.r, 0, Math.PI*2, false);
        this.cxt.fillStyle = this.color;
        this.cxt.fill()
        console.log('test');

    }


}
