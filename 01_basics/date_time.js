//Dates
// Date is object in js
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let createdDate = new Date(2023,0,3);
// Year,month,date
console.log(createdDate.toDateString())
console.log(createdDate.toLocaleString())

let myTimeStamp = Date.now();

console.log(myTimeStamp)
let new_date = new Date();
console.log(new_date);
console.log(new_date.getDate()); // month is givn in 0 indexing 0-jan


console.log(new_date.toLocaleDateString('defualt',{
    weekday:"short"
}))