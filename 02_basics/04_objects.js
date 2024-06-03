const tinderUser = new Object();

tinderUser.id = "234dfg"
tinderUser.name = "Sammy"

console.log(tinderUser)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj1={}
// const obj2={}
const obj3 = Object.assign({},obj1,obj2) // Object.assign(target,sources) it is better to use {} while assigning
console.log(obj3)
const obj4  = {...obj1,...obj2}
console.log(obj4)

console.log(Object.keys(tinderUser))
console.log(Object.entries(tinderUser))
console.log(Object.values(tinderUser))

const course={
    coursename:"Operating systems",
    price:"999",
    courseInstructor:"Devi"
}

const {courseInstructor} = course; // desrtucturing

const {courseInstructor:instructor} = course

console.log(courseInstructor)
console.log(instructor);

// {
//     "coursename":"Operating systems",
//     "price":"999",
//     "courseInstructor":"Devi"
// } // json


