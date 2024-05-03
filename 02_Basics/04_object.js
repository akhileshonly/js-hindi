// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc4"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some2@gmail.com",
    fullname: {
        userfullname: {
            firstname: "akhilesh",
            lastname: "yadav"
        }
    }
}

const akhilUser = {

    email1: "akhil3@gmail.com",
    fullname2: {
        userFullNem: {
            firstname2: "Akhilesh",
            lastname2: "Yadav"

        }
    }
}

console.log(akhilUser.fullname2.userFullNem.lastname2);

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "akh@gmail.com"
    },
    {
        id: 1,
        email: "akh@gmail.com"
    },
    {
        id: 1,
        email: "akh@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "akhilesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "akhilesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
