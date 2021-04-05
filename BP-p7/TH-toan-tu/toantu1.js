let inputWidth;
let inputHeight;

inputWidth = prompt("Nhap vao chieu rong");
inputHeight = prompt( "Nhap vao chieu cao");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let S = width * height;
document.write("Dien tich la: " + S);