// objects in JavaScript can be created in 4 Different Ways:

// Creating object with a constructor
// Using object literals
// Creating object with Object.create() method
// Using es6 classes

const mysm = Symbol("keyt1") // symbol declaration

const userData = {
    name: "akhilesh",
    email: "akhilesh@enthuons.com",
    location: "noida",
    [mysm]: "keyt1",
    age: 18,
    isusrlogged: false,
    lastLoginDays: ["monday", "thursday", "saturday"]
};

// console.log(userData.name);
// console.log(userData.lastLoginDays[0]);
// Object.freeze(userData);
userData.email = "akh@hgm.com"
//Object.freeze(userData.email);
//userData.email = "akhilesh@hotmail.com"
//Object.freeze(userData.email);
userData.location = "delhi"

//console.log(userData);

userData.greeting = function(){
console.log("Hello Akhilesh Welcome to JS")
};

userData.greeting2 = function(){
console.log(`hello ${this.name} welcome to ${this.location}`)
}
//console.log(userData.greeting()); 
//console.log(userData.greeting2()); 

// Bracket notation 
let school = {
	name: 'Vivekananda School',
	displayInfo: function () {
		console.log(`${this.name.split(' ')[1]}`);
	}
}
school.displayInfo(); // Vivekananda

//var name1 = document.querySelector('.header-link').textContent

var name1 = 123423589
var dataLayer = [];

// if document.querySelector('.header-link'){
//     window.datalayer.push()
//     {event: 'clicked-call'
//     parameter: '09987798'};
//     };
// if (name1 != null)
// {
//     dataLayer.push({
//         event: "add_to_cart",
//         event_id: 5});
//     console.log('data inserted')
// };
const obj = new Object(); // object declaration
obj.userName = "akhilesh";
obj.Email = "akhilesh@gmail.com";
obj.Email = "ashsf@lov.com";

const obj1 = {
    nmw: "akh",
    score: 44,
    country: "india"
} // object declaration

console.log(obj);
// console.log(obj1);

const syst = function myf1()
{
    if (name1 != null)
    {
console.log('console log true')
    };
}
return syst();

