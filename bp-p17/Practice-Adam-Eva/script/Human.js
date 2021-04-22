class Apple {
    constructor() {
        this.weightA = 10;
    }

    decrease() {     //void
        this.weightA--;
    }

    isEmpty() {     //boolean
        if (this.weightA > 0) {
            return true;
        } else {
            return false;
        }
    }

    getWeight() {   //int
        return this.weightA;
    }

}

class Human {
    constructor(name, gender, weight) {
        this.name = '';
        this.gender = true;
        this.weightH = 0;

    }

    isMale() {          //boolean
        return this.gender;
    }

    setGender(valueBoolean) {       //void(boolean)
        this.gender = valueBoolean;
    }

    checkApple(Apple) {     //boolean
        return Apple.isEmpty()
    }

    eat(Apple) {    //void
        if (this.checkApple(Apple)) {
            this.weightH++;
            Apple.decrease();
        }
    }

    say(String) {   //void
        console.log(String)
    }

    getName() {     //string
        return this.name;
    }

    setName(value) {     //void
        this.name = value;
    }

    getWeight() {   //int
        return this.weightH;
    }

    setWeight(value) {   //void
        this.weightH = value;
    }
}