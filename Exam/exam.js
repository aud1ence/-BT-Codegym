let canvas = document.getElementById('exam');
canvas.width = innerWidth;
canvas.height = innerHeight;
let c = canvas.getContext('2d');
class Circle {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.closePath();
    }
}
let cirlce = new Circle(10, 10, 100, "#000000");
cirlce.draw();
