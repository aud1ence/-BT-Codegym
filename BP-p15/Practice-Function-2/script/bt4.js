let num = prompt('Nhap vao');

function checkInput(n) {
    if (!isNaN(n)) {
        return alert('true');
    } else {
        return alert('false');
    }
}

checkInput(num);