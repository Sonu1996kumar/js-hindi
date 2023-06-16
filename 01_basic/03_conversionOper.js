//let score = 88
let score = "88"
//let score = "88acvhwsc" //isko bhi convert karne par number ho jayega
//number me par jab hum check karenge 
//console.log(valueInNumber) // to NaN aayega

//let score = null =>0 ho jayega
//let score = undefined => undefined hi rahega

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

//"33" => 33
//"33abc" => NaN
// true => 1; false => 0
let isLoggedIn = 1;
//let isLoggedIn = ""; =>false
//let isLoggedIn = "shj"; =>true
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

let someNumber = 55

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

//******************* Operation ************************//
let value = 5
let negValue = -value
//console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " sonu"
let str3 = str1+str2
console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(+true) =>1
// console.log(true+)//err
// console.log(+"") =>1
// console.log(""+)//err
 
let num1,num2,num3

num1=num2=num3=2+2

let gameCounter = 100
gameCounter++;