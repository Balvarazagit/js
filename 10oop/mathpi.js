const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);
// console.log(Math.PI);
// Math.PI = 1;
// console.log(Math.PI);

const chai = {
    name:"ginger tea",
    price :200,
    isavailable : true,
    orderchai : function(){
        console.log("chai is ready");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    // writable : false,
    enumerable : true // iterable
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`); 
    }
}
