// singleton
// Object.create


//object literals
const mySym1 = Symbol("key1")
// to use symbol in object we need to put key in square braces [mySym1]="mykey1" else it will be treated as string
// to access the values of mySym1 we ned to use square braces only Jsuser[mySym1]
const Jsuser = {
    [mySym1]:"mykey1",
    name:"shiva",
    age: 12,
    isLoggedIn:false,
    "full name":"Rajamuri Shiva"
}
console.log(Jsuser.name,Jsuser['name'])
console.log(Jsuser["full name"])
console.log(Jsuser[mySym1])
Jsuser.isLoggedIn = true
// Object.freeze(Jsuser); // once freezed changes are not reflected in object
console.log(Jsuser)
Jsuser.isLoggedIn = false
console.log(Jsuser)

// {
//     name: 'shiva',
//     age: 12,
//     isLoggedIn: true,
//     'full name': 'Rajamuri Shiva',
//     [Symbol(key1)]: 'mykey1'
//   }

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(Jsuser.greeting)//[Function (anonymous)]
console.log(Jsuser.greeting())//function gets exceuted
console.log(Jsuser.greeting2())