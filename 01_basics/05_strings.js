const name = "shiva"
const repoCount = 2
// console.log(name+ repoCount+ " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //  use this syntax to print variables in sentences

const gameName = new String('rshiva');
console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(name.charAt(2));
// all methods work for primitive string and object string
// Primitive strings are compared by value. String objects are compared by reference.
let str1 = "ahd";
let str2 = "ahd";
console.log(str1 == str2);  // true (value comparison)

let obj1 = new String("ahd");
let obj2 = new String("ahd");
console.log(obj1 == obj2);  // false (reference comparison)
console.log(obj1 === obj2); // false (strict reference comparison)

let str3 = new String("ahd");
let str4 = str3;
console.log(str3 == str4);  // true (same reference)
console.log(str3 === str4); // true (strict same reference)

const newString = gameName.substring(0,3);
const anotherString = gameName.slice(-5,2);
console.log(newString,anotherString);

// <string>.substring(stIndex,endIndex)

const str5 = "     this      ";
console.log(str5);
console.log(str5.trim());
console.log(str5.includes('th'))

let str6 = new String("abc-def-ghi");

const words = str6.split("-");
console.log(str6)