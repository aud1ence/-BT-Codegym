let arrEng = ["Dog", "Cat", "Turtle", "Spider", "Elephant"];
let arrVie = ["Con cho", "Con meo", "Con rua", "Con nhen", "Con voi"];
let result = [];

function search() {
    let value = document.getElementById("input").value;
    let flag = true;
    for (let i = 0; i < arrEng.length; i++) {
        if (value === arrEng[i]) {
            result = arrVie[i];
        }
    }
    document.write(result);

}

document.write(result);

