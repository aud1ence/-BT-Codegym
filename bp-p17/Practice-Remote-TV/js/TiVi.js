class TiVi {
    constructor(code) {
        this.code = code;
        this.chanel = '';
        this.volume = 5;
        this.status = false;
    }
    onTv() {
        this.status = true;
        console.log('Tv dang duoc bat')
    }
    toChanel(value) {
        this.chanel = value;
        console.log(this.chanel);
    }
    setVolume(value) {
        this.volume += value;
        console.log("volumn "+this.volume);
    }
    offTv() {
        this.status = false;
        console.log('Tv da tat');
    }
}