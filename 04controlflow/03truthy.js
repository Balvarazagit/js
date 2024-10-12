// const useremail ="bal@gmail.com";
// if (useremail) {
//     console.log("got user email");
// }
// else{
//     console.log("dont got email")
// }

// const useremail1 ="";
// if (useremail1) {
//     console.log("got user email");
// }
// else{
//     console.log("dont got email")
// }
const useremail2 =[];
// if (useremail2) {
//     console.log("got user email");
// }
// else{
//     console.log("dont got email")
// }

// falsy values
// false ,0 ,-0 ,null ,undefined ,Bigint ,NaN ,0n ,"".

// truthy values
// "0" ,"false" ," " ,[] ,{} ,function(){}.

// if(useremail2.length === 0){
//     console.log("Array is empty")
// }

const objempty = {}

if(Object.keys(objempty).length === 0){
    // console.log("Object is empty");
    
}
// Nullish Coalescing Operator (??) null undefined

let val;
// val = 10 ?? 20;
// val = null ?? 20;
// val = undefined ?? 20;
val = null ?? undefined ?? 20;


// console.log(val);

//terniary operator => condition ? true_statement : false_statement

const icecreamprice =500;
icecreamprice <= 400 ?console.log("less than 400"):console.log("more than 400");

