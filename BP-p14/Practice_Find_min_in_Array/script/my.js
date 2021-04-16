// function findMin(arr) {
//     if (arr.length===0)
//         return -1;
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [3, 34, 1, 65, -3, 23, 8, 22];
let arr3 = [-1,32,1,23,3];
let arr4 = [];
let index = findMin(arr4);
// let min = findMin(arr3);
alert(index);

function findMin(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        index++;
    }
    return index;
}