class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}

class FlashLamp {
    constructor() {
         this.status = false;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBatteryInfo() {
        return this.battery.getEnergy();
    }

    light() {
        if (this.status) {
            alert('Lighting');
        } else {
            alert('Not lighting');
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

}

// let Battery = function () {
//
//     this.setEnergy = function (energy) {
//         this.energy = energy;
//     };
//
//     this.getEnergy = function () {
//         return this.energy;
//     };
//
//     this.decreaseEnergy = function () {
//         if (this.energy > 0) {
//             this.energy--;
//         }
//     }
// };
// let FlashLamp = function () {
//
//     this.setBattery = function (battery) {
//         this.battery = battery;
//     };
//
//     this.getBatteryInfo = function () {
//         return this.battery.getEnergy();
//     };
//
//     this.light = function () {
//         if(this.status){
//             alert("Lighting");
//         } else {
//             alert("Not lighting");
//         }
//     };
//
//     this.turnOn = function () {
//         this.status = true;
//     };
//
//     this.turnOff = function () {
//         this.status = false;
//     }
// };
