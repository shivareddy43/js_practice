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


