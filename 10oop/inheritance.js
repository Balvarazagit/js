class user {
    constructor(username){
        this.username = username
    }
    logme(){
    console.log(`username is ${this.username}`);
    
    }
}

class teacher extends user {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addnewcourse(){
        console.log(`a new course for ${this.username}`);
        
    }
}

const chai = new user("ali");
console.log(chai);
console.log(chai.logme());

const tea = new teacher("ali","ali@gmail.com","ali")
console.log(tea);
console.log(tea.addnewcourse());
console.log(tea.logme());

console.log(chai === tea);
console.log(chai === teacher);
console.log(chai === user);
console.log(tea === teacher);
console.log(tea === user);





