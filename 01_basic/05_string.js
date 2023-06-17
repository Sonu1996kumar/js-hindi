const name = "sonusingh"
const repocnt = 50

//console.log(name + repocnt + "value")  //old style

//modern way //string interpolation
console.log(`hello my name is ${name} and my repo cnt is ${repocnt} `);

const gameName = new String('sonu')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,4) // isme hum -ve value nhi le sakte lege to bhi
// 0 se start kar dega
console.log(newString)

const anotherString = gameName.slice(-8,4)  //isme -ve use kar sakte hai
console.log(anotherString)

//trim
const newString1 = "  sonu   "
console.log(newString1)
console.log(newString1.trim())

//replace
const url = "https://sonu.com/sonu%20singh"
console.log(url.replace('%20','-'))
console.log(url.includes('sonu')) //hai ki nahi