class Remote {
    constructor(code) {
        this.code = code;
    }
    onRemote() {
        if (this.code == tv.code) {
            tv.onTv();
        } else {
            console.log('Code khong khop');
        }
    }
    moveChanel(value) {
        tv.toChanel(value);
    }
    controlVolume(value) {
        tv.setVolume(value);
    }
    offRemove() {
        tv.offTv();
    }
}