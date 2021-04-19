let list = ["Camry", "Vios", "Innova", "Prado", "VX"];

function table() {
    let html = '<tr><th colspan="2" style="text-align: left">Product Name</th><th style="text-align: right">num product</th></tr>';
    for (let i = 0; i < list.length; i++) {
        html += '<tr>';
        html += '<td id="' + i + '">' + list[i] + '</td>';
        html += '<td><button type="button" onclick="editProduct('+i+')">Edit</button></td>';
        html += '<td><button type="button" onclick="delProduct('+i+')">Delete</button></td>';
        html += '</tr>';
    }
    document.getElementById('table').innerHTML = html;
}

table();

function addProduct() {
    let addItem = document.getElementById('add').value;
    list[list.length] = addItem;
    table();
    alert('Ban vua them ' + addItem + ' vao danh sach');
}

function delProduct(index) {
    let check = confirm("Ban muon xoa chu?");
    if (check === true) {
        list.splice(index, 1);
         table();
    }
    return table();
}

function editProduct(item) {
    let fix = prompt('Ten san pham thay the');
    for (let i = 0; i < list.length; i++) {
        if (item === list[i]) {
            list.splice(item,1);
            // table();
            console.log(list);
            list.push(fix);
        }
    }
    table();
}
