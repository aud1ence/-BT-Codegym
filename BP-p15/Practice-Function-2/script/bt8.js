function addArr() {
    let arr = [];
    let element = +prompt('Nhap vao so phan tu');
    for (let i = 0; i < element; i++) {
        arr.unshift(+prompt('Nhap gia tri cua phan tu: ' + i));
    }
    return arr;
}

alert(addArr())