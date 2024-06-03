function loginUserMsg(username){
    return `${username} just logged in`;
}
function loginUserMsg1(username="xyz"){ // defualt value
    return `${username} just logged in`;
}
console.log(loginUserMsg("Shiva")) // Shiva just logged in
console.log(loginUserMsg()) // undefined just logged in


function calculatCartPrice(...num1){ // rest operator
    return num1
}

function calculatTotalPrice(val1,val2,...num1){ // rest operator
    console.log(val1+val2)
    return num1
}

console.log(calculatCartPrice(200,300,400))
console.log(calculatTotalPrice(100,2000,200,300,400))

//============= Functions ========================//
const add = function(a, b) {
    return a + b;
};
console.log(add(2, 3)); // Output: 5


// ========= Arrow functions ===================//

// Lexical `this` binding
function Person() {
    this.age = 0;
    
    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

let person = new Person(); // Logs increasing age
// ===================== Closures ==============//
function makeCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2


// ============== higher order functions ================//
function add(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = add(5);
console.log(addFive(3)); // Output: 8

// Using map as a higher-order function
const arr = [1, 2, 3];
const doubled = arr.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]


// =================== currying ==================//
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curryAdd(1)(2)(3)); // Output: 6

/// function composition
const compose = (f, g) => x => f(g(x));

const add1 = x => x + 1;
const multiply2 = x => x * 2;

const add1ThenMultiply2 = compose(multiply2, add1);

console.log(add1ThenMultiply2(5)); // Output: 12


// function generators ===========//
function* generatorFunction() {
    yield 'Hello';
    yield 'World';
}

const generator = generatorFunction();

console.log(generator.next().value); // Output: Hello
console.log(generator.next().value); // Output: World


// methos binding

const obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};

const unboundGetValue = obj.getValue;
console.log(unboundGetValue()); // Output: undefined

const boundGetValue = unboundGetValue.bind(obj);
console.log(boundGetValue()); // Output: 42

// Function Expressions: Anonymous or named functions assigned to variables.
// Arrow Functions: Shorter syntax, lexically bind this.
// Closures: Functions retaining access to their lexical scope.
// Higher-Order Functions: Functions that take or return other functions.
// Currying: Transforming functions to take arguments one at a time.
// Function Composition: Combining functions to create new functions.
// Recursion: Functions calling themselves.
// Async Functions: Using async and await for asynchronous code.
// Function Generators: Functions that can pause and resume.
// Method Binding: Using bind to set this context.

