const mysm = new Symbol("keyt1") // symbol declaration

const userData = {
    name: "akhilesh",
    email: "akhilesh@enthuons.com",
    location: "noida",
    [mysm]: "keyt1"
    age: 18,
    isusrlogged: false,
    lastLoginDays: ["monday", "thursday", "saturday"]
};

console.log(userData.name);
console.log(userData.lastLoginDays[0]);

userData.email = "akh@hgm.com"
userData.location = "delhi"

console.log(userData.email);