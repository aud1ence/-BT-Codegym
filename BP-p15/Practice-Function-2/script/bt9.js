let arr = [];
let element = +prompt('Nhap so luong phan tu');
for (let i = 0; i < element; i++) {
    arr.push(prompt('Nhap gia tri cua phan tu: ' + i));
}
function checkArray (charact) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === charact) {
            count++;
        }
    }
    if (count === 0) {
        alert('-1');
    } else {
        alert('So lan xuat hien trong mang la: '+count);
    }
}
let check = prompt('Kiem tra');
checkArray(check);