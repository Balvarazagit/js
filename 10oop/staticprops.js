class user {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username : ${this.username}`);
    }
    static createid(){
        return "123"
    }
}
const chai = new user("ali");
// console.log(chai.createid())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const earbuds = new teacher("earbuds","ear@buds")
earbuds.logme()
console.log(earbuds.createid)
