// console.log("s")
// console.log("o")
// console.log("n")
// console.log("u")

function sayMyname(){
console.log("s")
console.log("o")
console.log("n")
console.log("u")
}
//sayMyname =>reference yani fnc rahata hai
//sayMyname()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }

addTwoNumbers(3,5);
// const result = addTwoNumbers(3,5)

// console.log("result: ",result);//undefined kyunki return nhi ho rha hai console ka kam hai
//bas print karna

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
    
    console.log("sonu") //return ke baad koi kaam nhi hota hai


}
const result = addTwoNumbers(3,5)

//console.log("result: ",result);

function loginUserMessage(username){
    return `${username} just logged in`
}

//loginUserMessage("sonu") =>kuch nhi aayega kunki hum jo retun aa rha hai use print nhi kraw
//rahe hai

// console.log(loginUserMessage("sonu"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage()) =>undefined

// function loginUserMessage(username){
//     if(!username){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

//yanha undefind wala cndtion nhi aayega minm sam hoga nhi to jo likhenge wo ho jayega
// function loginUserMessage(username="sam"){
//     if(!username){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200,700,800)) yanha par 200 bas print hoga

// function calculateCartPrice(...num1){ //... ko rest ya sprade operator kahte hain depend on usecase
//     return num1
// }
// console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200,700,800)) //array return karega sabka

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200,700,800))//isme val1=200,val2=700 le lega bas 800 print hoga


//pass object in fnc
const user = {
    username: "sonu",
    price:99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );
}

//handleObject(user)
//m2 pass object
handleObject({
    username: "sam",
    price:399
})

//pass arry
const myArray = [200,400,100,600]
function returnSecondvalue(getArray){
    return  getArray[1]
}
// console.log(returnSecondvalue(myArray));

console.log(returnSecondvalue([200,400,100,600]));