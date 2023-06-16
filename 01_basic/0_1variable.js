const accountId = 144458
let accountEmail = "sonu@gmial.com"
var accountPassword = "1223"
accountCity = "Jaipur" // bina variable aage kuch  likhe hum variable ka memory reserve kar sakte hai
//par ye sahi nhi hai possibility hai ki varible aise bhi declare ho sakta hai
// accountId = 2 //cant change
let accountState;//agar value assign nhi karenge to undefined show karega

accountEmail = "gdshjajds"
accountPassword = "15456765"
accountCity = "Siwan"

console.log(accountId)

//m2 sare ko ek sath dekhne ke liye
/*
prefer not to use var becouse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])