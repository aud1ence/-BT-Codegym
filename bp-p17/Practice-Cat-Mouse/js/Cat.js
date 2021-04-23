class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;

    }

    shout() {
        console.log('meow meow');
    }

    catchRat(rat) {
        if (this.speed > rat.speed) {
            console.log('test')
            this.eatRat();
        }
    }

    eatRat(rat) {
       this.weight += rat.weightR;
         rat.living();
    }

    getName() {

    }
}