let x = 0;
let array = Array();
function addElementToArray() {
    array[x] = document.getElementById('textValue').value;
    alert('Phan tu: ' + array[x] + ' Da duoc them vao ' + x);
    x++;
    document.getElementById('textValue').value = '';
}
function displayArray() {
    let e = '<hr>';
    for (let i = 0; i < array.length; i++) {
        e += 'Phan tu ' + i + ' = ' + array[i] + '<br/>';
    }
    document.getElementById('result').innerHTML = e;
}
