function feetToMeter() {
    let number = document.getElementById('input').value;
    let result = number * 0.305;
    console.log(result);
    document.getElementById('result1').innerHTML = result;
}

function meterToFeet() {
    let valueMet = document.getElementById('input1').value;
    document.getElementById('result2').innerHTML = valueMet * 3.279;
}