const accountId  = 24332
let acccountEmail = "xyz@gmail.com"
var accountPassword = "334455"
accountCity = "Hyderabad"

// accountId = 3 -> not allowed
acccountEmail = "abc@gmail.com"
accountPassword = "774455"
accountCity = "Delhi"
/*
 Prefer not to use var. Because of issue in block scope and functional scope
*/
console.table([accountId,acccountEmail,accountPassword,accountCity]);
