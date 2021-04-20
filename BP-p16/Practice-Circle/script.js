let Circle = function (radius) {
    this.radius = radius;
    //Method tra ve ban kinh r cua hinh tron
    this.getRadius = function () {
        return radius;
    }
    //Method tinh dien tich
    this.getArea = function () {
        return Math.PI * radius * radius;
    }
};
//Tao mot obj voi ban kinh r = 2
let circle = new Circle(28);
let radius = circle.getRadius();
let area = circle.getArea();

alert("radius: " + radius + "; area: " + area);