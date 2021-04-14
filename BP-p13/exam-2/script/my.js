let arrEng = ["Dog", "Cat", "Turtle", "Spider", "Elephant"];
let arrVie = ["Con cho", "Con meo", "Con rua", "Con nhen", "Con voi"];
let result = [];

function search() {
    let value = document.getElementById("input").value;
    let check = false;
    for (let i = 0; i < arrEng.length; i++) {
        if (value === arrEng[i]) {
            result = arrVie[i];
            check = true;
        }
    }
  //  document.write(result);
    if (check) {
        document.write(result);
    } else {
        alert('Tu ban tim kiem khong ton tai');
    }
}


//document.write(result);

