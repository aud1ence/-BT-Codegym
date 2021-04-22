class Rat {
    constructor(name) {
        this.name = '';
        this.weight = 10;
        this.speed = 5;
        this.alive = true;
    }
    shout() {
        return console.log('chitz chizt');
    }
    living() {
        this.alive = false;
    }

}