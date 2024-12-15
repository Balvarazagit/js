const user = {
    usernaame : 'ali',
    logincount : 4,
    signin : true,

    getusers:function(){
      //  console.log('user detailed from databases');
      console.log(`username : ${this.usernaame}`);
      
        
    }
}

console.log(user.logincount);
console.log(user.getusers());

