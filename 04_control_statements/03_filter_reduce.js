// const newArray = array.filter(callback(element[, index[, array]])[, thisArg])
const array = [1,2,3,4,5,6,7]

const g4array = array.filter((num)=>{ // callback function
    return num>4
})
console.log(g4array);
const numbers = [5, 12, 8, 130, 44];

const result = numbers.filter(number => number >= 10);

console.log(result); // Output: [12, 130, 44]

const new_arr = array.map((num)=>{
    return num+10
})

console.log(new_arr);

const arrays = [[1, 2], [3, 4], [5, 6]];
//const result = array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// at strating accumulator = initialValue
const flattened = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
const numbers1 = [1, 2, 3, 4];

const sum = numbers1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 10

