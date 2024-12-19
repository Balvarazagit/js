const user ={
    _email: "ali@gmail.com",
    _password :"hiali",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }

}

// console.log(user.email);
// console.log(user.password);

const hi = Object.create(user)
console.log(hi.email);
console.log(hi.password);


