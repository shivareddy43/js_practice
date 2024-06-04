// Immediately Invoked Fucntion Expression (IIFE)

(function chai(){
    console.log('DB connected');
})(); // immediately invokes function, must use ; when ending

(()=>{
    console.log("DB Connected 2")
})()