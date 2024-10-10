// singleton objects

const tinder = new Object();
// console.log(tinder);

tinder.id = 123;
tinder.name = "balva";
tinder.isloggedin = false;

// console.log(tinder);

const reguser = {
    fullname : {
        username : {
            firstname : "ali",
            lastname : "balva"
        }
    },
    email : "bal@gmail.com",
}
console.log(reguser.fullname.username.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {obj1,obj2}

console.log(obj3);

console.log(Object.assign(obj1,obj2));
