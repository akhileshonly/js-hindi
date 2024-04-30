const marvel_heros = ["thor", "spiderman", "Ironman"];
const dc_heros = ["flash", "batman", "superman"];

//const all_heros = marvel_heros.push(dc_heros);
// const all_heros = marvel_heros.concat(dc_heros); // concat() allows to combine two or more arrays
// console.log(marvel_heros);
// console.log(all_heros);
//console.log(marvel_heros[3][1]);
const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator to combine two or more arrays

// console.log(all_new_heros);

const another_array = [1,2,3,4,5,[6,7,8],9,10,[11,12, [13,14]]];
const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("akhilesh")); // "isArray" when you check the given value is array or not. it will return True or False

const new_array = Array.from("akhilesh"); // "from" convert given string, obejct into an array.

console.log(new_array);

console.log(Array.from({name: "Akhilesh"})) // interesting. If we did not mention then it will return empty array [].

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



