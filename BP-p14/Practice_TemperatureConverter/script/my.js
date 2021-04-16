function getChange(value) {
    value = parseFloat(value);
    document.getElementById('output').innerHTML = (value - 32)/1.8;
}