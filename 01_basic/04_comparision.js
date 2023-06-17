// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
//try kare ki same data type ko hi compare kare nhi to kabhi2 desire result nhi aata
// console.log("2" > 1);
// console.log("02" > 1);

//most of cases me hum ayse comp ko avoid hi karenge kynk kabhi null 0 to kabhi NaN ho jata hai

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)
//the resion is that an equality check == and comparision ><>==<= work differently.
//coparision convert null to a number treating as 0.
//that's why(3) null>=0 is true ans rest both are false

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

//strict check ===
console.log("2" === 2)


