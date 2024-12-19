// class user {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
    
//     encryptpassword(){
//         return `${this.password}abc`
//     }

//     capitalusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new user("ali","ali@gmai.com","123")
// console.log(chai.encryptpassword());
// console.log(chai.capitalusername());

// behind the scene
function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
user.prototype.encryptpassword = function(){
    return `${this.password}abc`
}
const chai = new user("ali","ali@gmai.com","123")

console.log(chai.encryptpassword());
