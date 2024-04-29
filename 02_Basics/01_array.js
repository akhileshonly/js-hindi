const arr = ["akhilesh", 0, 1, 2, 3, 4, 5]; //array declaration
//console.log(arr);
//console.log(arr[0]);

let myarr = new Array("akhilesh", "yadav", 0, 1, 2, 3, 4); //array declaration
const myarr2 = new Array("india", "australia", "usa", "uk")

// myarr.push(5)
// myarr.push(7)
// myarr.push("sam")
// myarr.pop()

// console.log(myarr);

//myarr2.shift()

//myarr2.unshift();
//console.log(myarr2);

// console.log(arr.includes(5)); // finding & verifying the value of an array exists or not in True or False results
// console.log(myarr2.includes("india"));

// console.log(myarr2.indexOf("australia"));
// console.log(arr.indexOf(5));

const newArr = myarr2.join();

//console.log(newArr);
//console.log( myarr2);

const nm1 = myarr.slice(0, 3)

console.log("b", nm1);
console.log(nm1);

const nm2 = myarr.splice(1, 3)

console.log(nm2);
console.log("b", nm2);