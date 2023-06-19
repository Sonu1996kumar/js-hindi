//const tinderUser = new object() //singleton
const tinderUser = {} //non singleton

tinderUser.id = "132kcxnm"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

//dono same hi hai bas diff singleton and non singleton ka hai

//object ke ander object
const regularUser = {
    email:"soejn@gmail.com",
    fullname:{
        userfullname:{
        firstname:"sonu",
        lastname: "singh"
       }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//merging object
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a",6:"b"}
//const obj3 = {obj1,obj2} =>object ke ander object
// const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2,obj4) // is trah bhi likh sakte hai {} target hai baki object 
//isi me return honge nhi to yaad rakhna hoga ki baki sab object obj1 me assign ho rah hai
//isko bhi kam use karne wale hai 
//90 % use ye karenge
const obj3 = {...obj1,...obj2}  
console.log(obj3);

//jab data base se value ayega to array of object aayega
const users = [
    {
        id: 1,
        email: "ghvhjg"
    },
    {
        id: 2,
        email: "ghhjg"
    },
    {
        id: 3,
        email: "hvhjg"
    }
]

//console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser));// ab ye array me convert ho gya hai hm ab loop laga sakte hain
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // kam hi use aata hai
console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//destructuring

const course = {
    coursename:"js in hindi",
    price:999,
    courseInstructor:"sonu"
}

//course.courseInstructor =>is trah se hame har ko acsses karna padega

// const {courseInstructor} = course
const {courseInstructor:instructor} = course
//console.log(courseInstructor)
console.log(instructor)

//jason format(api se isi trah atta hai)
// {
//     "name":"sonu",
//     "coursename":"js in hindi"
//     "price":"free"
// }
// kabhi kabhi hame array ke format me milta hai

// [
// {},
// {},
// {}
// ]
