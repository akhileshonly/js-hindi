let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString(29, 3));
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));
let myDateCreated = new Date(2020, 11, 24, 14, 35)
// console.log(myDateCreated.toLocaleString());

let myNewDateCreated = new Date("04-21-2024")
// console.log(myNewDateCreated.toLocaleString());

let timeStamp = Date.now();
let timeStamp1 = new Date();

// console.log(timeStamp);
// console.log(myNewDateCreated.getTime());

// console.log(Math.floor(timeStamp/1000));

console.log(timeStamp1);
console.log(timeStamp1.getMonth()+1);
console.log(timeStamp1.getDay());
console.log(timeStamp1.getTime());
console.log(timeStamp1.getTimezoneOffset());

// `${newDate.getDay()} and the time `

timeStamp1.toLocaleString('default', {
    weekday: "long",
})
