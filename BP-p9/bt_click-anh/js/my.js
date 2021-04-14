function setPhoto(element, number) {
    let dataName = element.getAttribute('data-name');
    if (dataName == "do") {
        element.src = "bt-anh-blow/shin"+ number + ".jpg";
        element.setAttribute("data-name", "shin");
    } else if (dataName == "no") {
        element.src = "bt-anh-blow/do"+ number +".jpg";
        element.setAttribute("data-name", "do");
    } else {
        element.src = "bt-anh-blow/no"+ number +".jpg";
        element.setAttribute("data-name", "no");
    }
    checkWin();
}
