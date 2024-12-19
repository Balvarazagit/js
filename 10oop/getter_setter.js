class user{
    constructor(username,email){
        this.username = username
        this.email = email
    }
    get username(){
        return `${this._username.toUpperCase()} i am ali`
    }
    set username(value){
        this._username = value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const hi = new user("ali","ali@gmail.com")
console.log(hi.email);
console.log(hi.username);

