let number = +prompt('Nhap vao 1 so');

function checkNum() {
    if (number>0) {
        return alert(number+' la so nguyen duong (true)');
    } else if (number===0){
        return alert(number+' la so nguyen');
    } else {
        return alert(number+' la so nguyen am (false)');
    }
}
checkNum(number);