const obj = { a: 1, b: 2, c: 3 };

// Using for...in
for (const key in obj) {
    console.log(key, obj[key]);
}

// Using Object.keys()
Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
});

// Using Object.values()
Object.values(obj).forEach(value => {
    console.log(value);
});

// Using Object.entries()
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});

// for(const [key,val] of obj){
//     console.log(key,":-",val)
// } // this give error as objects are not itrable

const map = new Map();
map.set('a', 1);
map.set('b', 2);

for (const [key, value] of map) {
    console.log(key, value);
}
console.log(map.has('a')); // Output: true
console.log(map.has('d')); // Output: false
map.delete('a');
console.log(map.has('a')); // Output: false
map.clear();
console.log(map.size); // Output: 0
map.forEach(([key,val])=>{
    console.log(key,val)
});

const mapArray = [...map]; // converts array into map
console.log(mapArray); // Output: [['a', 1], ['b', 2], [3, 'c']]
