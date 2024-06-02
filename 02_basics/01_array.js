const myArr = [1,2,3,"shiva"]

console.log(myArr[0]);
const myArr2  = new Array(9,8,7);


// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9) // adds at starting
myArr.shift() // removes at starting

console.log(myArr.includes(9));
console.log(myArr);

const newArr = myArr.join()
console.log(newArr) // string type

// slice, splice

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2); //[2,3,'shiva']
console.log("C ", myArr) // [1,6]

// splice will remove elements and assign