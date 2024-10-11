// if
// <,>,<=,>=,==,===,!=,!==
// const temperature = 41;
// if(temperature == 40){
//     console.log("temperature is equal to 40");
// }
// else{
//     console.log("temperature is more than 40");
    
// }

//     const score = 20;
// if(score>10){
//     let power = "fly";
//     console.log(`user power : ${power}`);   
// }
// console.log(`user power : ${power}`);   

// const balance =1000;
// if(balance>500) console.log("greater then 500");

// const balance =100;

// if(balance < 50){
//     console.log("less than 50")
// }
// else if(balance > 50){
//     console.log("greater than 50");
// }
// else{
//     console.log("another write");
    
// }

const userlogged =true;
const userhavedebitcard = true;
const userloggedfromgoogle =false;
const userloggedfromemail = true;

if(userlogged && userhavedebitcard){
    console.log("buy course");
}
if(userloggedfromemail || userloggedfromgoogle){
    console.log("logged in");
    
}