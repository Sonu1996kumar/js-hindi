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
function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}