function user(email,username){
this._email = email
this._username = username

Object.defineProperty(this,'email',{
    get:function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._email = value
    }
})
Object.defineProperty(this,'username',{
    get:function(){
        return this._username.toUpperCase()
    },
    set: function(value){
        this._username = value
    }
})
}

const hi = new user("ali","ali@gmail.com");
console.log(hi.email);
console.log(hi.username);
