class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    calAcreage() {
        return this.length * this.width;
    }

    calPerimeter() {
        return (this.width * this.length) / 2;
    }

    draw() {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(50, 50, this.width, this.length);
        // console.log(ctx.fillStyle);
    }

}