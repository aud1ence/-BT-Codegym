let imgObject = null;
imgObject = document.getElementById('myImg');
function create() {
    imgObject = document.getElementById('myImg');
    imgObject.style.position = 'relative';
    imgObject.style.left = '0px';
}
function moveRight() {
    imgObject.style.left = parseInt(imgObject.style.left) + 20 + 'px';
}
window.onload = create;