const arr = ["akhilesh", 0, 1, 2, 3, 4, 5]; //array declaration
//console.log(arr);
//console.log(arr[0]);
const lstitem = arr[arr.length - 1];
//console.log(lstitem); // accessing the last element of an array, use "array[array.lenght-1]""

let myarr = new Array("akhilesh", "yadav", 0, 1, 2, 3, 4); //array declaration
const myarr2 = new Array("india", "australia", "usa", "uk") // accessing the last element of an array by using [array.length-1]

// myarr.push(5) // To Add Element to the end of Array use push() method
// myarr.push(7)
// myarr.push("sam")
// myarr.pop()  // Removes and returns the last element, use pop() method

console.log(myarr2[myarr2.length-1]);

//myarr2.shift() // Removes and returns the first element, use shift() method

//myarr2.unshift(); To Add Element to the beginning of array use unshift() method
//console.log(myarr2);

// console.log(arr.includes(5)); // finding & verifying the value of an array exists or not in True or False results
// console.log(myarr2.includes("india"));

// console.log(myarr2.indexOf("australia"));
// console.log(arr.indexOf(5));

const newArr = myarr2.join();

//console.log(newArr);
//console.log( myarr2);

const nm1 = myarr.slice(0, 3)

// console.log("b", nm1);
// console.log(nm1);

const nm2 = myarr.splice(1, 3)

// console.log(nm2);
// console.log("b", nm2);

// We can iterate array and access array elements using for and forEach loop. As below example.

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "JavaScript", "React", "Akhil"];

// Iterating through for loop
for (let i = 0; i <courses.length; i++) {
	//console.log(courses[i])
}
const course = ["array", "function", "object", "arrow function", "string"];

course.forEach(function myf1(my){
 //   console.log(my)
})
let cnss = courses.concat(course);
//console.log("Concatenated array is:", cnss);

// console.log(cnss.toString()) // Use toString() method to converts an array to a string.
// console.log(typeof cnss); // typeof operator is used ot check the type of an array. It returns “object” for arrays.

// Number Array
let arrs = [10, 20, 30, 40, 50];
let arr1 = [110, 120, 130, 140];

// String array
let string_arr = ["Alex", "peter", "chloe"];

// push: Adding elements at the end of the array
arr.push(60);
// console.log("After push op " + arrs);

// unshift() Adding elements at the start of the array
arr.unshift(0, 10);
//console.log("After unshift op " + arrs );

// pop: removing elements from the end of the array
arr.pop();
//console.log("After pop op" + arrs);

// shift(): Removing elements from the start of the array
arr.shift();
//console.log("After shift op " + arrs);

// splice(x,y): removes x number of elements
// starting from index y
arr.splice(2, 1);
//console.log("After splice op" + arrs);

// reverse(): reverses the order of elements in array
arr.reverse();
//console.log("After reverse op" + arrs);

// JS eval() function
function evalfn() {
    const a = 4;
    const b = 4;
    const value = eval(new String(a * b));
    // console.log(value);
}
evalfn();

// JS encode URI function
const url = "https://www.google.com/search?q=geeks for geeks";
const encodedURL = encodeURI(url);
// console.log(encodedURL);

function usernme(){
	nam = 'akhilesh',
	cit = 'Noida',
	pst = 'engineer'
	//console.log(`${nam} lives in ${cit}`)
	return nam+cit+pst;
}console.log(usernme());