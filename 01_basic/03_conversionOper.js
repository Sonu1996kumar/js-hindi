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