class Rat {
    constructor(name, weightR, speed) {
        this.name = name;
        this.weightR = weightR;
        this.speed = speed;
        this.alive = true;
    }
    shout() {
        console.log('chit chit');
    }
    living() {
        this.alive = false;
        console.log('da chet')
    }

}