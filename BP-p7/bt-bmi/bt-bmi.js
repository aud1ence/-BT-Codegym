let m = prompt("Nhap can nang");
let h = prompt("Nhap chieu cao");
bmi = m / (h * h);
if (bmi < 18.5) {
    alert("Gay")
} else if (18.5 <= bmi <= 24.9) {
    alert("Binh thuong")
} else if (25 <= bmi <= 29.9) {
    alert("Map")
} else if (30 <= bmi <= 34.9) {
    alert("Beo c1")
} else if (35 <= bmi <= 39.9) {
    alert("beo c2")
} else if (bmi >= 40) {
    alert("Nguy hiem")
}
