class Hero {
    constructor(image, top, left, size) {

        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }

    getHeroElement() {
        return '<img alt="" width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveRight() {
        this.left += 70;
        console.log('ok: ' + this.left);
    }
    moveDown() {
        this.top += 70;
        console.log('test: '+ this.top);
    }
    moveLeft() {
        this.left -= 70;
        console.log('left: ' + this.left);
    }
    moveUp() {
        this.top -= 70;
        console.log('up: '+this.top);
    }

}

let hero = new Hero('img/images.png', 30, 20, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top === 30) {
        hero.moveRight();
    } else if (hero.top < window.innerHeight - hero.size && hero.left > window.innerWidth - hero.size){
        hero.moveDown();
    } else if (hero.left > 0 && hero.top > window.innerHeight - hero.size) {
        hero.moveLeft();
    } else if (hero.top > 0 && hero.left === -50) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}

start();