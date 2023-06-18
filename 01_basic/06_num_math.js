const score = 400
console.log(score)

const balance = new Number(100)  //100 % number hi chahiye to directly define kar lenge
console.log(balance)

console.log(balance.toString())

console.log(balance.toString().length)
console.log(balance.toFixed(2))

//const otherNumber = 123.8966
const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3)) =>1.12e+3

const hundered = 1000000
console.log(hundered.toLocaleString('en-IN'))

//*********************************Math****************** */
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.max(3,7,8,9,5))
// console.log(Math.min(2,3,5,7,9))

console.log(Math.random())
//add 1 to aboid 0 value
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
console.log((Math.random()*10)+1)


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min)