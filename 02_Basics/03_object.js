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

console.log(userData);

userData.greeting = function(){
console.log("Hello Akhilesh Welcome to JS")
};

userData.greeting2 = function(){
console.log(`hello ${this.name} welcome to ${this.location}`)
}
console.log(userData.greeting()); 
//console.log(userData.greeting2()); 
