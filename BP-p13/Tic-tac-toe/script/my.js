let arr = [];
let player = 1;

function draw() {
    let text = '';
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        text += '<tr>';
        for (let j = 0; j < 3; j++) {
            arr[i][j] = '*';
            text += '<td id="' +i+ '-' +j+ '" onclick="play('+i+','+j+')">';
            text += '</td>';
        }
        text += '</tr>';
    }
    document.getElementById('game').innerHTML = text;
}
draw();

function play(x,y) {
    if (player ===1) {
        document.getElementById(x+ '-' +y).innerHTML = 'o';
        player = 2;
        arr[x][y] = 'o';
    } else {
        document.getElementById(x+ '-' +y).innerHTML = 'x';
        player = 1;
        arr[x][y] = 'x';
    }
    console.log(arr);
}
function checkWin(x,y) {

}
