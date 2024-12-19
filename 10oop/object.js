function multi(num){
  return num*5
    
}

multi.power = 2;
// console.log(multi(3));
// console.log(multi.power);
// console.log(multi.prototype);

function createuser(username,score){
    this.username = username;
    this.score = score;
}

createuser.prototype.increment = function(){
    this.score++;
}
createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
    
}
const chai =new createuser('chai',29)
const tea = new createuser('tea',11)

chai.printme()


