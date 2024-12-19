let mystr = "balva    ";
// console.log(mystr.length);
// console.log(mystr.trim().length);
console.log(mystr.trueLength);

let myheros = ['thor','spiderman']
let powerheros = {
    thor : 'hammer',
    spiderman : 'sling',

    getspiderpower : function(){
        console.log(`spidy power : ${this.spiderman}`);
        
    }
}

Object.prototype.ali = function(){
    console.log(`ali is present in all objects`);
    
}
Array.prototype.hiali = function(){
    console.log(`ali is present in array`);
    
}

// powerheros.ali()
// myheros.ali()
// myheros.hiali()
// powerheros.hiali()
// ali()

//inheritance
const user = {
    name:"ali",
    email : "ali@gmail.com"
}
const teacher = {
    makevideo : true
}
const teachersupport = {
    isavailable : true
}
const tasupport = {
    fulltime :true,
    makeassignment : 'js assignment',
    __proto__ : teachersupport
}
// console.log(tasupport);

// console.log(teacher.__proto__ = user)

// console.log(Object.setPrototypeOf(teacher,teachersupport));
// console.log(teacher);

let chai = "chai     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
chai.trueLength()
"ali".trueLength()
