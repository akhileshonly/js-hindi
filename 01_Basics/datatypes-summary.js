
// Primitive Data Types:

// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // number
const scoreValue = 100.3 // number

const isLoggedIn = false // Boolean
const outsideTemp = null // null

let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// const bigNumber = 343243434543523n


// Non Primitive or Reference Type

// Array, Objects, functions.

const contries = ["india", "aus", "german"];

let myobj = {
    name: "akhilesh",
    age: 32,
}

const myFunction = function()
{

    console.log("Hello World")
}

// How to know the datatype of any variable, please use typeof() function to know that

console.log(typeof bigNumber);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Maemory (Primitive), Heap Memory (Non Primitive)

let myyotubeName = "akhileshonlychannel";
let secondyoutube = myyotubeName;
secondyoutube = "notonlyakhileshbutother";

console.log(secondyoutube);
console.log(myyotubeName);

let userone = {

    email: "akhilesh@gmail.com",
    upi: "akh@ybl",
}

let usertwo = userone;

usertwo.email = "akh@gmail.com"
usertwo.upi = "ok@sbi"

console.log(usertwo.email);
console.log(userone.email);

// primitive values must go under stack and stack results a copy
// where as non primitve values go under Heap and heap results the actual value.