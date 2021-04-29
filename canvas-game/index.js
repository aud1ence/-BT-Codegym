let canvas = document.getElementById('game');
canvas.width = 900;
canvas.height = innerHeight;
let c = canvas.getContext('2d');
let x = 500, dx = (Math.random() + 0.5) * 10;
let y = 500, dy = (Math.random() + 0.5) * 10;
let r = 10;
// let img = document.getElementById('img');
let rectangle = {
    xR: 0,
    yR: canvas.height - 30,
    widthR: 150,
    heightR: 30
}

let score = 0;
let startGame = document.getElementById('play')
let checkGameOver = false;
let colMarble = 44, rowMarble = 20;
let marbles = [];
for (let i = 0; i < colMarble; i++) {
    marbles[i] = [];
    for (let j = 0; j < rowMarble; j++) {
        marbles[i][j] = {x: 0, y: 0, status: 1}
    }
}
// c.drawImage(img,0,0)
window.addEventListener('mousemove', function (event) {
    if (!checkGameOver) {
        let centerX = event.clientX - 550;
        if (centerX > 0 && centerX < canvas.width) {

            rectangle.xR = centerX - rectangle.widthR / 2;
        }
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawRectangle();
    }
    console.log('test')
})


function draw() {

    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2)
    c.fillStyle = '#FFFFFF';
    c.fill();
    c.closePath();

    x += dx;
    y += dy;
}


function drawMarble() {
    for (let i = 0; i < colMarble; i++) {
        for (let j = 0; j < rowMarble; j++) {
            if (marbles[i][j].status === 1) {
                let marbleX = (i * 20) + 20;
                let marbleY = (j * 20) + 20;
                marbles[i][j].x = marbleX;
                marbles[i][j].y = marbleY;
                c.beginPath();
                c.arc(marbleX, marbleY, 10, 0, Math.PI * 2);
                c.fill();
                c.closePath();
                console.log('tester')
            }
        }
    }
}

function drawRectangle() {
    c.beginPath();
    c.fillRect(rectangle.xR, rectangle.yR, rectangle.widthR, rectangle.heightR)
    c.fillStyle = 'pink';
    c.closePath();
    console.log('testing');
}

function collision() {
    for (let i = 0; i < colMarble; i++) {
        for (let j = 0; j < rowMarble; j++) {
            let c = marbles[i][j];
            if (c.status === 1) {

                if (x + r > c.x &&
                    x + r < c.x + 20 &&
                    y + r > c.y &&
                    y + r < c.y + 20) {
                    dy = -dy;
                    c.status = 0;
                    score++;
                }
            }
        }
    }
}

function drawScore() {
    c.font = "25px Arial";
    c.fillStyle = "white";
    c.fillText("Score: " + score, 10, 800);
}
function drawHighScore() {
    c.font = "25px Arial";
    c.fillStyle = "white";
    c.fillText( highsc , 10, 900);
}
let highsc = loadScoreArray()
function saveScoreArray(score) {
    let name = prompt('What your name?');
    let user = [name,score];
    localStorage.setItem('score3',JSON.stringify(user));
}
function loadScoreArray() {
    if(localStorage.hasOwnProperty('score3')){
        return JSON.parse(localStorage.getItem('score3')).join(': ');
    }else {
        return [];
    }
}
function update() {
    if (x + r > canvas.width || x + r < 0) {
        dx = -dx
    }
    if (y + r < 0) {
        dy = -dy
    }
    if (y + r > canvas.height) {
        checkGameOver = true;
    }
    if (rectangle.xR + rectangle.widthR > canvas.width) {
        rectangle.xR = canvas.width - rectangle.widthR;
    }
    if (x + r > rectangle.xR &&
        x + r <= rectangle.xR + rectangle.widthR &&
        y + r >= canvas.height - rectangle.heightR) {
        dy = -dy;
        dx = -dx;
    }
}

function animate() {
    if (!checkGameOver) {
        c.clearRect(0, 0, canvas.width, innerHeight);
        drawRectangle();
        drawMarble();
        draw();
        collision();
        update();
        drawScore();
        drawHighScore();
        requestAnimationFrame(animate);
    } else {
        alert("Game Over " + "Your score: " + score);
        saveScoreArray(score);
        document.location.reload();
    }
}

startGame.addEventListener('click', function (e) {
    animate()
    console.log('start')
})



