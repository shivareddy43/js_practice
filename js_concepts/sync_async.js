function loopFunc(){
    console.log("loop started");
    for(let i=0;i<100000000;i++){
        // some task
    }
    console.log("loop ended");
}

function timeOutFunc(){
    console.log("time out started");
    setTimeout(function (){
        console.log("Inside time out func executed");
    },6000)
    
}
console.log("Hi");
loopFunc();
timeOutFunc();
loopFunc();
console.log("Bye");