// const Arr = [1,2,3,4,true,"sonu"]

//resizable hota hai aur deep copy banta hai yani reference
const Arr = [1,2,3,4,5]
const myHero = ["saktiman","naagraj"]

const myArr2 = new Array(1,2,3,4,5,6)
console.log(Arr[0])

//Array method
Arr.push(6)
// Arr.pop()

// Arr.unshift(9) =>starting me add karega
//Arr.shift()

// console.log(Arr.includes(9))
// console.log(Arr.indexOf(9))

const newArr = Arr.join() //add all the array in astring
// console.log(Arr)
// console.log(newArr)
// console.log(typeof newArr)

//slice and splice
console.log("A ", Arr)

const myn1 = Arr.slice(1,3)
console.log(myn1)
console.log("B ", Arr)
 
//main diff are splice include both the range and it also manupulate the original array

const myn2 = Arr.splice(1,3)
console.log("C ",Arr)
console.log(myn2)



