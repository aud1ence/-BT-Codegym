function checkChange(id) {
    let myGood = document.getElementById('good').checked;
    let myCheap = document.getElementById('cheap').checked;
    let myFast = document.getElementById('fast').checked;


    if (id === "good") {
        if (myCheap && myFast) {
            myFast = false;
        }
    } else if (id === "cheap") {
        if (myGood && myFast) {
            myGood = false;
        }
    } else if (id === "fast") {
        if (myCheap && myGood) {
            myCheap = false;
        }
    }

    document.getElementById('good').checked = myGood;
    document.getElementById('cheap').checked = myCheap;
    document.getElementById('fast').checked = myFast;


}