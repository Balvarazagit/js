// {} is scope
// global scope is outside the {} 
// block scope is inside the {}

// var c = 400
let b = 500
if(true){
    let a =20;
    const b =30;
    // var c =40;
    console.log("inner : ", a );
}

// console.log(a); 
console.log(b);
// console.log(c);


