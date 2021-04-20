function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}
function getRandomHex() {
    return Math.floor(Math.random()*255);
}
function getRandomColor() {
    let red = getRandomHex();
    let blue = getRandomHex();
    let green = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let r = Math.floor(Math.random()*80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Circle(x,y, r);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(10,10,150,80);
    ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
    ctx.fill();
}
createCircle();
function createMultiCircle() {
    for (let i = 0; i < 50; i++) {
        createCircle();
    }
}
createMultiCircle();
