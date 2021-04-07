function convert() {
    let input = document.getElementById("dauVao").value;
    let to = document.getElementById("to").value;
    let from = document.getElementById("from").value;
    result = input * to / from;
    document.getElementById('ketqua').innerHTML=result;
    document.write(result + "asdf");
}
