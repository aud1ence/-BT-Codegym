    let inputVatly;
    let inputHoahoc;
    let inputSinhhoc;

    inputVatly = prompt("Nhap vao diem Vat ly");
    inputHoahoc = prompt("Nhap vao diem Hoa hoc");
    inputSinhhoc = prompt("Nhap vao diem Sinh hoc");

    let ly = parseInt(inputVatly);
    let hoa = parseInt(inputHoahoc);
    let sinh = parseInt(inputSinhhoc);
    let sum = ly + hoa + sinh;
    let tb = sum / 3;

    document.write("Diem trung binh la: " + tb);
    document.write('<br/>');
    document.write("Tong diem ba mon la: " + sum );

