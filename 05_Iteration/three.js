// for of loop.

// ["", "", ""]
// [{}, {}, {}]
const text = [
    "GeeksforGeeks",
    " A Computer Science Portal for Geeks ",
    "43"
]

for (const rer of text) {
    console.log(rer);
}

const arr = [1, 2, 3, 4, 5]

const arr2 = [23, 24, 25, 26, 27, 28, 29]

for (const num1 of arr2) {
 //console.log(num1)   
}

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

let person = {
    firstName: "GeeksforGeeks",
    lastName: "A Computer Science Portal for Geeks",
    rank: 43
};
let userId = "";
let i;
for (i in person) {
    //userId += person[i];
    //console.log(person[i]);
}