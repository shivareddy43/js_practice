const array = ['a', 'b', 'c'];
for (const value of array) {
    console.log(value);
}
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key, obj[key]);
}
const array2 = [1, 2, 3, 4, 5];
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}

for(const key in array){
    console.log(key) // 0,1,2 -> indexes
}
for (const key of array) {
    console.log(key); // gives elements in array
}

array.forEach(function (val){
    console.log(val)
})
array.forEach((val)=>{
    console.log(val)
})
array.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})