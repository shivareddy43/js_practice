// Primitive

// 7 types : String, Numnber, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) // false ->  Symbol returns unique data type

const bigNumber = 234567754345678765434567n;// having 'n' at the end of a number will make it BigInt

const temperatue = null;
console.log(typeof temperatue)//object
//  Reference (Non primitive)
// Array, Objects, Fucntions

const heroes=["abc","def","edf"];
let myObj = {
    name:"Shiva",
    age:"22"
}

const myFunction = function(){
    console.log("Hello!!!!!");
}

// Stack(Primitive), Heap(Non-primitive)

let firstname = "shiva"
let fullname = firstname;
fullname="shivareddy"
console.log(fullname);
console.log(firstname);


let userOne = {
    email:"user@gmail.com",
    username:"user1"
}// memory is allocated in heap memory

let userTwo = userOne

userTwo.email = "user2@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

