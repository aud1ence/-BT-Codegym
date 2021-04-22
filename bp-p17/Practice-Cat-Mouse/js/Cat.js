class Cat {
    constructor(name) {
        this.name = '';
        this.weight = 0;
        this.speed = 10;

    }
    shout(String) {
        return console.log('meow meow');
    }
    catchRat(Rat) {
        if (this.speed > Rat.speed) {
            Rat.shout();
            Rat.living();
            return console.log('ahihi do ngok')
        }
    }
    eatRat(Rat) {
        Rat.alive = false;
        this.weight = Rat.weight;
    }
    getName() {
        return this.name;
    }
}