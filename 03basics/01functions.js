

// function saymyname () {
//     console.log("a");
//     console.log("l");
//     console.log("i");
// }

// // saymyname()

// function twonumberadd(n1,n2){
//     if((typeof n1) == 'number'){
//         if((typeof n2 == 'number')){
//         console.log(n1 + n2);
//     }
//     else{
//         console.log("write number!");
        
//     }
// }
//     else{
//         console.log("write number!");
        
//     }
// // console.log(n1 + n2);
// }

// twonumberadd(4,4)

function add(n1,n2){
    // let result = n1+n2;
    // return result
    return n1+n2;
}
const result = add(4,5);
// console.log(result);

function name(uname = "abcd"){
    if(!uname){
        console.log("please...");
        return
    }

    return `${uname} logged`
}

// console.log(name("ali"));
console.log(name());// output : undefined logged
console.log(name("gfds"));


const user = {
    username :"ali",
    price :300
}

function cartuser(anyObject){
    return console.log(`username : ${anyObject.username} and price : ${anyObject.price}`);
    
}
cartuser(user)

cartuser({
    username :"aaa",
    price:300
})

const myarr = [10,20,30,40];

function newarry(arr){
return console.log(`price is ${arr[1]}`);

}
newarry(myarr)
newarry([10,30,40,48]);