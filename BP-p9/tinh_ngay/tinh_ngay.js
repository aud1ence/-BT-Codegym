function tinhNgay() {
    let input = +document.getElementById('input').value;
    switch (input) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('response').innerHTML = "Thang " + input + " co 31 ngay";
            break;
        case 2:
            document.getElementById('response').innerHTML = "Thang " + input + " co 28 hoac 29 ngay";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('response').innerHTML = "Thang " + input + " co 30 ngay";
            break;
        default:
            document.getElementById('response').innerHTML = "Ban nhap sai";
    }
}
