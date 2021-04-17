let a = +prompt('Nhap so a');
let b = +prompt('Nhap so b');
let c = +prompt('Nhap so c');
let min = a;

function smallest() {
    if (min>b) {
        if (b>c) {
            min = c;
        } else {
            min = b;
        }
    }
    if (min>c) {
        if (c>b) {
            min = b;
        } else {
            min = c;
        }
    }
    return min;
}
smallest(a,b,c);
alert(min);