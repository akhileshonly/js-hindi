const name = "Akhilesh"
const myScoreCount = 50

const nameS = "AkhileshKYadav"
const myCityCode = 56

// simple way to add string
console.log(name + myScoreCount); 

// how to add two strings using string interpolations
// console.log(`hello my name ${name} and my score count is ${myScoreCount}`); 
console.log(`my name is ${nameS} and i live in a city of code ${myCityCode}`);


const myfirstString = new String("akhilesh-yadav");
const myfirstSting1 = new String("   akhilesh yadav");

console.log(myfirstString.length)
console.log(myfirstString.split('-'))
console.log(myfirstString.charAt(2));
console.log(myfirstString.toUpperCase());
console.log(myfirstString.toLowerCase());
console.log(myfirstString.charCodeAt(0));
console.log(myfirstString.at(0));

let subS1 = myfirstString.slice(2,5);
let subS = myfirstString.substring(2, 4);

// console.log(subS1);

const newString = myfirstSting1.trim()


console.log(newString)
console.log(myfirstSting1)

// const newString1 = myfirstSting1.slice(-8, 4)
// console.log(newString1);

const url = "https://akhileshyadav.com/yadav%akhilesh"

console.log(url.replace('%20', '-'))

