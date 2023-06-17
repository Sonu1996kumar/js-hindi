//primitive or call by value

//7 types : String,Number,Boolean,null,undefined,Symbol,BigInt


//reference (non primitive)

//array,objects,functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//chahe value same de de par ye same nhi hai // symbol ka typeof symbol hi aata hai
console.log(id===anotherId)

//const bigNumber = 17242884171747898792n  //n lagane se bigint ho jayega

const heros = ["saktimaan","naagraj","doga"];

let myObj = {
    name: "sonu",
    age: 23,
}

const myFunction = function(){
    console.log("hello duniya");
}
console.log(typeof heros) =>Object
console.log(typeof myObj) =>Object
console.log(typeof myFunction) =>function //object fnc
//non premitive ka data type return object hi aata hai 