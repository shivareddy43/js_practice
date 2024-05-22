let score = "33";

console.log(typeof score);//string
let valueIntNumber = Number(score);
console.log(typeof valueIntNumber);// number

score = "33acd";

console.log(typeof score);//string
valueIntNumber = Number(score);
console.log(typeof valueIntNumber);// number
console.log(valueIntNumber);//NaN

// "33"= > 33
// "33sjbf" => NaN
// true -> 1;false->0
let isLoggedIn = 1

let booleanIsLoggedIn =  Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true


// 1-> true,0->false
//""-=> false,"trt"-> true
// Number,Boolear,String -> objects
