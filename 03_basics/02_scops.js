var c=300
let a = 30
if (true){
    let a = 20
    const b = 30
    var c = 40 // c is over rided
}

console.log(a) // error if 'a' was not declared outside if. And 'a' inside if do not over ride value of outside 'a'
// console.log(b) // error
console.log(c) // no error

// console.log(addOne(5)) // this will not cause error

function addOne(num){
    return num+1
}
// console.log(addOne(5)) // this will not cause error

// console.log(addTwo(5)) // this will cause error
const addTwo = function(num){
    return num+2
}

console.log(addTwo(5))
