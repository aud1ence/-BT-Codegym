let arrStar = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let arrConstellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
let index = 0;

function findStar() {
    let input = prompt('Tim kiem ngoi sao');
    let check = false;
    for (let i = 0; i < arrStar.length; i++) {
        if (input === arrStar[i]) {
            index = i;
            check = true;
        }
    }
    if (check) {
        alert('Ten chom sao la: '+arrConstellation[index]);
    } else {
        alert('Khong tim thay');
    }
}
findStar();
