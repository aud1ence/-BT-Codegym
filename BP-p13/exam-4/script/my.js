let arr = ["H", "E", "L", "L", "O"];
let text = "";

function press() {
    let outPut = document.getElementById("area").value;
    let j = outPut.length;
    if (j > 0) {
        for (let i = 0; i <= j; i++) {
            text += arr[i]
            if (i === 5) {
                document.getElementById("area").value = text;
                n="";
            }
        }
    }
    document.getElementById("area").value = text;
    n="";
    setTimeout("press()",100);
}
console.log(press());
// function on() {
//     press()
// }