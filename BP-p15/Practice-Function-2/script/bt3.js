let input = +prompt('Nhap vao');
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    alert('Gai thua cua '+num+' la: '+result);
}
factorial(input);
