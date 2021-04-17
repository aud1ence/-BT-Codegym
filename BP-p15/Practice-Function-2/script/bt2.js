const PI = 3.14;
let input = +prompt('Nhap vao ban kinh');

function acreage() {
    alert('Dien tich la: ' + Math.pow(input,2) * PI);
}

function perimeter() {
    alert('Chu vi la: ' +input*2*PI);
}
acreage(input);
perimeter(input);