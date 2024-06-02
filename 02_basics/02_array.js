const marvel_heroes = ['thor','ironman','spiderman']
const dc_heroes = ['superman','flash','batman']

const all_heroes = marvel_heroes.concat(dc_heroes) // concat returns new array
console.log(all_heroes)

const all_new_heroes = [...marvel_heroes,...dc_heroes] // spreading operator

console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[2,3,[4,5]]]

const spreaded_array = another_array.flat(1) // depth
console.log(spreaded_array)
console.log(Array.isArray("shiva"))
console.log(Array.from("shiva"))
console.log(Array.from({name:"shiva"})) // gives empty as it donot know to use ey or value to make array

let sc1 =  100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1,sc2,sc3))

