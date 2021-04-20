class Mobile {
    constructor(name) {
        this.battery = 100;
        this.message = '';
        this.inBox = [];
        this.outBox = [];
        this.name = name;
        this.status = false;
    }

    checkStatus() {
        this.reduceBattery();
        return this.status;
    }

    turnOn() {
        this.reduceBattery();
        this.status = true;
    }

    turnOff() {
        this.reduceBattery();
        this.status = false;
    }

    chargeBattery() {
        this.reduceBattery();
        if (this.checkBattFull()) {
            this.battery++;
        }
    }

    textMessage(txt) {
        this.reduceBattery();
        this.message = txt;
    }

    sendMessage(mobile) {
        this.reduceBattery();
        mobile.inBox.push(this.message);
        this.outBox.push(this.message);
    }

    getInbox() {
        this.reduceBattery();
        return this.inBox;
    }

    getOutbox() {
        this.reduceBattery();
        return this.outBox;
    }

    getName() {
        return this.name;
    }

    reduceBattery() {
        this.battery--;
    }

    checkBattFull() {
        return this.battery < 100;
    }
}
let Nokia = new Mobile('E72');
let Iphone = new Mobile('Iphone 12');
Nokia.turnOn();
Iphone.turnOn();
Nokia.textMessage('Xin chao Iphone');
Nokia.sendMessage(Iphone);

console.log(Iphone);
console.log(Nokia);