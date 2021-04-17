function addArray() {
    let arr = [];
    let element = +prompt('Nhap so luong phan tu');
    for (let i = 0; i < element; i++) {
        arr.push(prompt('Nhap gia tri cua phan tu: ' + i));
    }
    let check = prompt('Nhap vao ky tu muon check');
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (check !== arr[i]) {
            flag = true;
            return alert('-1');
        }
        let count = 0;
        count++;
    }
alert(count)
    if (flag) {
        alert(count);
    } else {
        alert('-1');
    }
}

addArray();
// function checkWord() {
//     let check = prompt('Nhap vao ky tu muon kiem tra');
//     let count = 0;
//     for (let i = 0; i < addArray().length; i++) {
//         if (check == addArray([i])) {
//             count++;
//         }
//
//     }
//     return count;
// }
// checkWord();
