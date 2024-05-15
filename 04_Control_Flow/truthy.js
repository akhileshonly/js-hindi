const userEmail = null
const username = ["akhilesh", "onlyakhilesh", "radharadha", "krishnakrishna"]

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length !== 0) {
//     console.log("Array is empty");
// }
// else{
//     console.log("Array is not empty");
// }

// if(username.length !== 2){

//     console.log(`${username[3]} welcome to the application`)

// } else{

//     console.log("thanks for registering")
// }

const user1 = {
    username: "radharadha",
    email: "radharadha@gmail.com",
    phone: 884564376
}

console.log(`Our goddedes name is ${user1.username}, her email is ${user1.email} and phone number is ${user1.phone}`);

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 1) {
//     console.log("Object is empty");
// }
// else{

//     console.log("object is not emplty")
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")