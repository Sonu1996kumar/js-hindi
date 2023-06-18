const marvel_heros = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

//marvel_heros.push(dc_heroes) //push in exisiting array 
//array koi bhi data le leta hai isne array ko bhi ek data ki trah le liya hai
//dc_heros is a single element in marvel_heros
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

//const allHeros = marvel_heros.concat(dc_heroes)// return new array and whole array ko 
//element ki trah add nhi karta hai
//console.log(allHeros)

//log prefer karte hai

const all_new_heros = [...marvel_heros,...dc_heroes] //... array ke element ko sprade kar deta hai
//isme hum jitna chahe utna array add kar sakte hai
console.log(all_new_heros)

const another_arry = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_arry.flat(Infinity) //ye array ko sprad kar dega hum chahe to
//range bhi de sakte hai ki kanha tak sprad karna hai
console.log(real_another_array)


console.log(Array.isArray("sonu"))//=>false
console.log(Array.from("sonu"))//=>array
console.log(Array.from({name:"sonu"}))// interesting [] dega kyunki hame batana hoga ki hume key ka 
//array cahiye ya something else


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
