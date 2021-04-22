class SwitchButton {
    constructor() {
        this.status = false;
        this.lamp = new ElectricLamp();
    }
    connectToLamp() {
        this.lamp.status = true;
    }
    switchOff() {
        if (this.lamp.status) {

            this.lamp.turnOff();
        }
    }
    switchOn() {
        if (this.lamp.status) {
            this.lamp.turnOn();
        }
    }
}