function getRandomInt(x){
    return Math.floor(Math.random() * x);
}

function createPromise(){
    return new Promise(function executor(resolve,reject){
        setTimeout(function(){
            let num = getRandomInt(10);
            if (num%2==0){
                resolve(num);
            }
            else{
                reject(num);
            }
        },5000);
    });
}
let y = createPromise();
console.log(y);
setTimeout(function exec(){
    console.log(y);
},6000);

/*
promises are synchronous in nature.
promises are placeholders
promise can be in 3 states -> fulfill, reject, pending.
by defual promise is in pending state
call function passed in in promise is called "function exectutor"
unlike callback functionswe can add functions to promise later also
if code in promises in synchronous then it is executed sunchronously
if it has asynchronous functions then code is executed in asynchronous manner.
if we pass multiple values to resolve or reject functions they will only consider first argument.
===> (imp point) state of the promise is pending until you call resolve or reject else it is in pending state forever
any piece of code that you write after resolve or reject is executed.
promise is once resolve/rejected, we can call resolve/reject many times but it will not show any effect on your promise, it only considers the first call.
example : resolve(num);
          resolve(7)
        it only takes the value of num not 7
*/