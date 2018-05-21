let resTable = document.getElementById('results-table-table');
let arr = [];
let rowsLength = resTable.rows.length;
for (let i = 1; i < rowsLength; i++) {
    for (let j = 1; j < resTable.rows[i].cells.length; j++) {
        arr.push(resTable.rows[i].cells[j].innerHTML);
    }
}
console.log(arr)
//clg + arr (snippets)


// nfn 
const name = (params) => {

}





let resTable = document.querySelectorAll('.sortable-theme-bootstrap');
let arr = [];
let rowsLength = resTable[0].rows.length;
for (let i = 1; i < rowsLength; i++) {
    if (resTable[0].rows[i].cells[4]) {
        arr.push(resTable[0].rows[i].cells[4].innerText)
    }
}

console.log(arr)




//  By Sam
let obj = {};  // so undefined won't be influenced
for (let i = 0; i < arr.length; i++) {
    item = arr[i];
    type = typeof obj[item];

    type == 'undefined' ? obj[item] = 1 : obj[item]++;
    // if (type == 'undefined') {
    // 	obj[item] = 1;
    // } else {
    // 	obj[item]+= 1;
    // }

}


// in for in Object, but cann't receive null and undefined 
// in for array, it'll check the index number, not the value at that index
const countNations = arr.reduce((accumulator, currentValue) => {
    if (currentValue in accumulator && accumulator) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    // must return 
    // because the a in accumulator will be undefined= =
    return accumulator;
}, {});
console.log(countNations);
// console.log();





var friends = [
    {
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
    },
    {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
    },
    {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
    }
];


let allBooks = friends.reduce((prev, cur) => {
    return [...prev, cur.books]
}, ['initBook']);







let arrAddIndexArray = {};
arr.map((e, i) => {
    if 
    arrAddIndexArray[i] = [e, 0];
})
