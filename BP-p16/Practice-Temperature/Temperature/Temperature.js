class Temperature {
    constructor(value) {
        this.valueC = value;
    }
    convertF() {
        return this.valueC*1.8 + 32;
    }
    convertK() {
        return this.valueC+273.15;
    }
}
let myC = new Temperature(25);
let outF = myC.convertF();
let outK = myC.convertK();
alert('Gia tri do F la: '+outF+' Gia tri do K la: '+outK);
