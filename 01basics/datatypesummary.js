// Primitive datatypes
// 7 types : String ,Number, Boolean, Null, undefined, Symbol, BigInt 

// String
const string01 = "hi";

// Number
const Number01 = 122;

// Boolean
const bool = true;

// Null
const nol = null;

// Undefined
const undef = undefined;

// symbol
const id = Symbol('123');
const anotherid = Symbol('123');
// console.log(id)
// console.log(anotherid)
// console.log(typeof id);
// console.log(id === anotherid);

// BigInt
const isbignumber = 127365456789222222222222222222222n;
// console.log(typeof isbignumber)


// Reference(Non-Primitive) datatype

// Object ,Array ,Function

// object : typeof => object
let myobj = {
    name:"ali",
    age:21,
};
// console.log(myobj)
// console.log(typeof myobj);

// array : typeof => object
let Myarray = ["ali","raza","balva"];
// console.log(Myarray);
// console.log(typeof Myarray);

// function  : typeof => function
let myfunction = function(){
    console.log("function");
}
// console.log(myfunction)
// console.log(typeof myfunction)

// ***************************Memory***********************
// Stack(primitive) & Heap(nonprimitive)

// stack
let name = "balva";

let anothername = name;
anothername ="aliraza";

// console.log(anothername)
// console.log(name);

// heap

let userone ={
    name: "ali",
    age:21
}
let usertwo = userone;

usertwo.age = 22;

console.log(userone);
console.log(usertwo);
