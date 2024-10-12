// reduce 
const mynumbers =[1,2,3,4,5];
// const newnum = mynumbers.reduce(function (acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// },0)
// console.log(newnum);
const newnum = mynumbers.reduce((acc,currval)=> (acc+currval),0)
// console.log(newnum);

const shoppingcart = [
    {
        language :"js",
        price :400
    },
    {
        language :"py",
        price :700
    },
    {
        language :"java",
        price :900
    },
    {
        language :"ruby",
        price :200
    },
]

console.log(shoppingcart.reduce((acc,item)=> (acc+item.price),0))
