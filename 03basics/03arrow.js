const user = {
    username : "ali",
    price : "js",
    welcomemessage : function(){
        console.log(`username : ${this.username}`);
        console.log(this);
        
    }
}

// user.welcomemessage()
// user.username = "balva";
// user.welcomemessage()

// console.log(this);

// function code(){
//     let username = "ali"
//     console.log(this.username);
// }

// code()

// const chai = function(){
//     let username = "ali"
//     console.log(this.username);
// }
// chai()

// arrow function  () => {}

// const chai = () => {
//     let username = "ali"
// console.log(this.username);
// }
// chai()

// explicit return

// const addtwo = (num1,num2) => {
// return num1 + num2
// }

// console.log(addtwo(2,3));

// implicit return

// const addtwo = (num1,num2) => num1 + num2

// const addtwo = (num1,num2) => (num1 + num2)
//     console.log(addtwo(2,3));

const addtwo = (num1,num2) => ({username : "ali"})
console.log(addtwo());
