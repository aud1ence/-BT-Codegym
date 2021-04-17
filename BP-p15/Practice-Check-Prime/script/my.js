let number = +prompt('Nhap vao mot so de kiem tra');

function isPrime(number) {
    let flag = true;
    if (number < 2) {
        flag = false;
    } else if (number === 2) {
        flag = true;
    } else {
        for (let i = 2; i < number - 1; i++) {
            if (number % i === 0) {
                flag = false;
            }
        }
    }
    if (flag===true) {
        alert(number+' la so nguyen to');
    } else {
        alert(number+' khong la so nguyen to');
    }

}

isPrime(number);