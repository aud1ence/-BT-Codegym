let b = document.getElementById("gamecaro");
let board = [];
let data = '';

for (let i = 0; i < 10; i++) {
    board[i] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}

for (let i = 0; i < 10; i++) {
    data += '<br>';
    for (let j = 0; j < 10; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}

data += "<br><br><input type='button' value='Change value' onclick='changeValue()'>"
b.innerHTML = data;

function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = '';
    board[positionX][positionY] = "x";
    for (let i = 0; i < 10; i++) {
        data += "<br>";
        for (let j = 0; j < 10; j++) {
            data += board[i][j] + "&nbsp&nbsp&nbsp&nbsp";
        }
    }
    data += "<br><br><input type='button' value='Change value' onclick='changeValue()'>"
    b.innerHTML = '<hr>' + data;
}