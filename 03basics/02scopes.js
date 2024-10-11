// {} is scope
// global scope is outside the {} 
// block scope is inside the {}

// var c = 400
let b = 500
if(true){
    let a =20;
    const b =30;
    // var c =40;
    // console.log("inner : ", a );
}

// console.log(a); 
// console.log(b);
// console.log(c);


function one(){
    const username = "balva";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two()   
}
// one()

if(true){
const username = "ali";
if(username === "ali"){
const website =" youtube";
// console.log(username + website);

}
// console.log(website);

}
// console.log(username);
console.log(addone(3))
function addone(num){
    return num + 1
}

// expression function

const addtwo = function(num){
return num+2;
}
console.log(addtwo(3))