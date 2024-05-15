// for-in for off loop understanding.

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple",
    jav: "java"
}
// manipulation on object
for (const key in myObject1) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    //console.log(`the short key is ${key} :- ${myObject1[key]}`)
}

// lets take an array and apply for in loop.
const pls = ['jqas', 'dgs', 'hhg', 'wer', '45']
for (const key in pls) {
    console.log(pls[key])
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }