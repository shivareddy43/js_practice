/*
p.then(fulfillmenthandler,rejectionhandler) // both are handler functions
 
*/

function getRandomInt(x) {
  return Math.floor(Math.random() * x);
}

function createPromise() {
  return new Promise(function executor(resolve, reject) {
    console.log("entering the executor callback in the promise constructor");
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 0);
    console.log("Exiting the ececutor call back in the promise constructor");
  });
}
console.log("Starting ....");
const p = createPromise();
console.log("We are now waiting fot the promise to complete");
console.log("Current state of promise is, ", p);
setTimeout(function exec() {
  console.log("Executing 0 sec timer"); // printed at last
}, 0);
p.then(
  function fullfillHandler1(value) {
    console.log("Inside fulfillhandler1 with value, ", value);
  },
  function rejectionHandler1(value) {
    console.log("Inside rejectionhandler1 with value, ", value);
  }
);
// p.then registers the handlers.
// we can register multiple handlers using same p.then
// handlers are stored in the form of array
// promise handlers wait in the job/microtask queue and execute when they recieve signal from event cycle, where as async functions (setTimeout stay in call back queue)
p.then(
  function fullfillHandler2(value) {
    console.log("Inside fulfillhandler2 with value, ", value);
  },
  function rejectionHandler2(value) {
    console.log("Inside rejectionhandler2 with value, ", value);
  }
);
console.log("Ending ....");
// at any point of time if event loop has a choice to pick from microtack/job queue or calllback queue then it always prefer to microtask queue
// preference of execution : call stack/global code > microtask queue> call back queue
// .then(fulfill,rejection) will again return you a promise and it can be used by adding again then to it leading to .then chaining
