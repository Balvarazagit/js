//object literals

const user = {
    usernaame : 'ali',
    logincount : 4,
    signin : true,

    getusers:function(){
      //  console.log('user detailed from databases');
      // console.log(`username : ${this.usernaame}`);
      // console.log(this);
    }
}

// console.log(user.logincount);
// console.log(user.getusers());
// console.log(this);


// constructor function
function user1(username,login,logout){
  this.username = username;
  this.login = login;
  this.logout = logout;

  this.greet = function(){
    console.log(`ali : ${this.username}`);
    
  }
  //  return this;
}
// console.log(user1("ali",true,false));
const user2 = new user1("balva",true,true)
// console.log(user2);
console.log(user1.constructor);




