//declare by 1.literal 2.constructor(object.create)
//singleton =>constructor se banate hai to banta hai ye apne type ka ek hi object hai
//by other method uske multiple instances ban jate hai

//object literal

const mySym = Symbol("key1")

const JsUser ={
    name:"Hitesh",
    age:18,
    [mySym]:"mykey1", //agar hum [] nhi denge to ye symbole nhi rahega ye string rahega 
    "full name":"sonu kumar singh",//isko hum dot se acsses hi nhi kar sakte hame []use karna padega
    location:"Siwan",
    email:"sonu@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email) //is se bhi ho jayega par ye sahi tarika nhi hai ,galat bhi nhi hai
console.log(JsUser["email"])// isme hame string ki trah lena padega  "email"
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "rima@gail.com" //update the value
//bject.freeze(JsUser) //ab hum koi change nhi kar sakte hai
JsUser.email = "sonu@microsoft.com"
console.log(JsUser)

//fnx ko variable ki trah use kar sakte hai
JsUser.greeting = function(){
    console.log("hello duniya");
}

JsUser.greeting2 = function(){
    console.log(`Hello duniya,${this.name}`);
}
//console.log(JsUser.greeting)//[Function (anonymous)] fnx ka reference aaya hai(imp)
console.log(JsUser.greeting())
console.log(JsUser.greeting2())

//jaida tar value hum dot se acsses karenge par kuch chijo ko hume [] se karna padega