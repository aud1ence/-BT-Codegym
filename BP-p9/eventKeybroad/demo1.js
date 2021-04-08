function upArrowPressed() {
    let phantu = document.getElementById("nobita");
    phantu.style.top = parseInt(phantu.style.top) - 10 + 'px';
}

function downArrowPressed() {
    let phantu = document.getElementById("nobita");
    phantu.style.top = parseInt(phantu.style.top) + 10 + 'px';
}

function leftArrowPressed() {
    let phantu = document.getElementById("nobita");
    phantu.style.left = parseInt(phantu.style.left) - 10 + 'px';
}

function rightArrowPressed() {
    let phantu = document.getElementById("nobita");
    phantu.style.left = parseInt(phantu.style.left) + 10 + 'px';
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
